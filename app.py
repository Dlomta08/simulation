from flask import (
    Flask, render_template, request, jsonify,
    redirect, send_from_directory, session, url_for
)
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

from werkzeug.utils import secure_filename
import os
from flask_migrate import Migrate


import os
import cloudinary # type: ignore
import cloudinary.uploader # type: ignore

# Config from Railway environment variables
cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)
print("Cloudinary Config:")
print("cloud_name:", repr(os.getenv("CLOUDINARY_CLOUD_NAME")))
print("api_key:", repr(os.getenv("CLOUDINARY_API_KEY")))
print("api_secret:", repr(os.getenv("CLOUDINARY_API_SECRET")))


app = Flask(__name__)
app.secret_key = "super_secret_key_123"

# PostgreSQL connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:gzeLeuznnVNTAVFLWPIXEKlhYYgNlkAj@interchange.proxy.rlwy.net:47942/railway'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

UPLOAD_FOLDER = os.path.join("static", "uploads")
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif" , "JPG", "PNG", "JPEG", "GIF"}

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.Text, nullable=False)
    role = db.Column(db.String(20), default='მოსწავლე')
    avatar_filename = db.Column(db.String(255), nullable=True)

class Problem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image_filename = db.Column(db.String(255), nullable=False)
    tags = db.Column(db.String(255))
    difficulty = db.Column(db.Integer)
    owner_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    is_private = db.Column(db.Boolean, default=False)

# Create DB tables
with app.app_context():
    db.create_all()
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)

# Helpers
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Routes

@app.route("/")
def serve_index():
    return send_from_directory("static", "index.html")

@app.route("/<path:filename>")
def serve_static_files(filename):
    return send_from_directory("static", filename)

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form["username"]
        email = request.form["email"]
        password = request.form["password"]
        confirm_password = request.form["confirm_password"]
        requested_role = request.form["role"]

        if password != confirm_password:
            return "Passwords do not match.", 400
        
        if User.query.filter((User.username == username) | (User.email == email)).first():
            return "Username or email already exists.", 400

        # If requested role is teacher, save as pending_teacher
        if requested_role == "მასწავლებელი":
            role = "pending_teacher"
        else:
            role = requested_role

        hashed_pw = generate_password_hash(password, method="pbkdf2:sha256")
        user = User(username=username, email=email, password_hash=hashed_pw, role=role)
        db.session.add(user)
        db.session.commit()

        return redirect(url_for("serve_index"))

    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        user = User.query.filter_by(username=username).first()
        if not user or not check_password_hash(user.password_hash, password):
            return "Invalid credentials.", 400

        session["username"] = user.username
        session["role"] = user.role
        return redirect(url_for("serve_index"))


    return render_template("login.html")

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("serve_index"))

@app.route("/api/whoami")
def whoami():
    return jsonify({
        "username": session.get("username"),
        "role": session.get("role")
    })

@app.route("/profile")
def profile():
    if "username" not in session:
        return redirect(url_for("login"))

    user = User.query.filter_by(username=session["username"]).first()
    if not user:
        return "User not found.", 404

    return render_template("profile.html", user=user)


@app.route("/edit_profile", methods=["GET", "POST"])
def edit_profile():
    if "username" not in session:
        return redirect(url_for("login"))

    user = User.query.filter_by(username=session["username"]).first()
    if not user:
        return "User not found.", 404

    if request.method == "POST":
        new_email = request.form.get("email")
        new_username = request.form.get("username")

        # Optional: Validate inputs here

        if new_email:
            user.email = new_email

        if new_username:
            # Check if username is taken
            existing = User.query.filter(User.username == new_username).first()
            if existing and existing.id != user.id:
                return "Username already taken.", 400
            user.username = new_username
            # Update the session username so it shows up right
            session["username"] = new_username

        db.session.commit()
        return redirect(url_for("profile"))

    return render_template("edit_profile.html", user=user)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

UPLOAD_FOLDER = os.path.join("static", "uploads")
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

@app.route("/upload_avatar", methods=["GET", "POST"])
def upload_avatar():
    if "username" not in session:
        return redirect(url_for("login"))

    user = User.query.filter_by(username=session["username"]).first()
    if not user:
        return "User not found.", 404

    if request.method == "POST":
        if "avatar" not in request.files:
            return "No file part.", 400

        file = request.files["avatar"]

        if file.filename == "":
            return "No selected file.", 400

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            filepath = os.path.join(UPLOAD_FOLDER, filename)
            file.save(filepath)

            user.avatar_filename = filename
            db.session.commit()
            return redirect(url_for("profile"))
        else:
            return "Invalid file type.", 400

    return render_template("upload_avatar.html")

@app.route("/change_password", methods=["GET", "POST"])
def change_password():
    if "username" not in session:
        return redirect(url_for("login"))

    user = User.query.filter_by(username=session["username"]).first()
    if not user:
        return "User not found.", 404

    if request.method == "POST":
        current_password = request.form.get("current_password")
        new_password = request.form.get("new_password")

        if not current_password or not new_password:
            return "All fields are required.", 400

        if not check_password_hash(user.password_hash, current_password):
            return "Incorrect current password.", 400

        user.password_hash = generate_password_hash(new_password, method="pbkdf2:sha256")
        db.session.commit()
        return redirect(url_for("profile"))

    return render_template("change_password.html")


@app.route("/admin/pending_teachers")
def pending_teachers():
    if "username" not in session:
        return "Not authorized.", 403

    current_user = User.query.filter_by(username=session["username"]).first()
    if not current_user or current_user.role != "admin":
        return "Forbidden.", 403

    pending = User.query.filter_by(role="pending_teacher").all()
    return render_template("pending_teachers.html", users=pending)

@app.route("/admin/approve_teacher", methods=["POST"])
def approve_teacher():
    if "username" not in session:
        return "Not authorized.", 403

    current_user = User.query.filter_by(username=session["username"]).first()
    if not current_user or current_user.role != "admin":
        return "Forbidden.", 403

    user_id = request.form.get("user_id")
    user = User.query.get(user_id)
    if not user:
        return "User not found.", 404

    user.role = "მასწავლებელი"
    db.session.commit()
    return redirect(url_for("pending_teachers"))


@app.route("/users_list")
def users_list():
    users = User.query.all()
    return render_template("users_list.html", users=users)

@app.route("/view_user_profile/<int:user_id>")
def view_user_profile(user_id):
    user = User.query.get_or_404(user_id)
    # Determine current user
    current_user = None
    if "username" in session:
        current_user = User.query.filter_by(username=session["username"]).first()
    return render_template("view_user_profile.html", user=user, current_user=current_user)

@app.route("/change_user_role/<int:user_id>", methods=["POST"])
def change_user_role(user_id):
    if "username" not in session:
        return "Unauthorized", 403
    current_user = User.query.filter_by(username=session["username"]).first()
    if not current_user or current_user.role != "admin":
        return "Forbidden", 403

    user = User.query.get_or_404(user_id)
    new_role = request.form.get("new_role")

    if new_role not in ["მოსწავლე", "მასწავლებელი", "admin"]:
        return "Invalid role.", 400

    user.role = new_role
    db.session.commit()
    return redirect(url_for("view_user_profile", user_id=user.id))

@app.route("/delete_user/<int:user_id>", methods=["POST"])
def delete_user(user_id):
    if "username" not in session:
        return "Unauthorized", 403

    current_user = User.query.filter_by(username=session["username"]).first()
    if not current_user or current_user.role != "admin":
        return "Forbidden", 403

    user = User.query.get_or_404(user_id)

    # Prevent deleting yourself if you want:
    if user.id == current_user.id:
        return "You cannot delete your own account.", 400

    # Optionally: delete avatar file if exists
    if user.avatar_filename:
        try:
            os.remove(os.path.join("static", "uploads", user.avatar_filename))
        except Exception:
            pass

    db.session.delete(user)
    db.session.commit()
    return redirect(url_for("list_users"))


@app.route("/personal_bank")
def personal_bank():
    if "username" not in session:
        return redirect(url_for("login"))
    return render_template("personal_bank.html")

class PersonalProblem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    image_filename = db.Column(db.String(255), nullable=False)
    tags = db.Column(db.String(255))
    difficulty = db.Column(db.Integer)

    user = db.relationship("User", backref="personal_problems")

@app.route("/upload_personal_problem", methods=["POST"])
def upload_personal_problem():
    if "username" not in session:
        return "Unauthorized", 403

    user = User.query.filter_by(username=session["username"]).first()
    if not user:
        return "User not found", 404

    if "image" not in request.files:
        return "No image file.", 400

    file = request.files["image"]
    if file.filename == "" or not allowed_file(file.filename):
        return "Invalid file.", 400

    # ✅ Upload to Cloudinary
    try:
        upload_result = cloudinary.uploader.upload(file)
        image_url = upload_result["secure_url"]
    except Exception as e:
        return f"Cloudinary upload failed: {str(e)}", 500

    difficulty = int(request.form.get("difficulty", 3))
    tags = request.form.get("tags", "")

    problem = PersonalProblem(
        user_id=user.id,
        image_filename=image_url,
        tags=tags,
        difficulty=difficulty
    )
    db.session.add(problem)
    db.session.commit()

    return "Personal problem uploaded."


@app.route("/api/personal_problems")
def get_personal_problems():
    if "username" not in session:
        return "Unauthorized", 403

    user = User.query.filter_by(username=session["username"]).first()
    if not user:
        return "User not found", 404

    problems = PersonalProblem.query.filter_by(user_id=user.id).all()
    return jsonify([
        {
            "id": p.id,
            "image_url": p.image_filename,  # Already full Cloudinary URL
            "tags": p.tags or "",
            "difficulty": p.difficulty
        }
        for p in problems
    ])

@app.route("/api/delete_personal_problem/<int:problem_id>", methods=["POST"])
def delete_personal_problem(problem_id):
    if "username" not in session:
        return "Unauthorized", 403

    user = User.query.filter_by(username=session["username"]).first()
    problem = PersonalProblem.query.get(problem_id)

    if not problem or problem.user_id != user.id:
        return "Not found or no permission", 404

    # Remove image from Cloudinary
    try:
        public_id = extract_public_id(problem.image_filename)
        if public_id:
            cloudinary.uploader.destroy(public_id)
    except Exception as e:
        print("Cloudinary delete error:", e)

    db.session.delete(problem)
    db.session.commit()
    return "Deleted"

@app.route("/upload_problem", methods=["POST"])
def upload_problem():
    if "username" not in session:
        return "Unauthorized", 403

    user = User.query.filter_by(username=session["username"]).first()
    if not user:
        return "User not found", 404

    if "image" not in request.files:
        return "No image file.", 400

    file = request.files["image"]
    if file.filename == "" or not allowed_file(file.filename):
        return "Invalid file.", 400

    try:
        upload_result = cloudinary.uploader.upload(file)
        image_url = upload_result["secure_url"]
    except Exception as e:
        return f"Cloudinary upload failed: {str(e)}", 500

    difficulty = int(request.form.get("difficulty", 3))
    tags = request.form.get("tags", "")
    is_private = request.form.get("is_private", "true") == "true"

    problem = Problem(
        owner_id=user.id,
        image_filename=image_url,
        tags=tags,
        difficulty=difficulty,
        is_private=is_private
    )
    db.session.add(problem)
    db.session.commit()

    return "Problem uploaded."

@app.route("/api/problems")
def get_problems():
    if "username" not in session:
        return "Unauthorized", 403

    user = User.query.filter_by(username=session["username"]).first()
    if not user:
        return "User not found", 404

    problems = Problem.query.filter(
        (Problem.is_private == False) |
        ((Problem.is_private == True) & (Problem.owner_id == user.id))
    ).all()

    return jsonify([
        {
            "id": p.id,
            "image_url": p.image_filename,
            "tags": p.tags or "",
            "difficulty": p.difficulty,
            "source": "personal" if p.owner_id == user.id and p.is_private else "public"
        }
        for p in problems
    ])

@app.route("/api/delete_problem/<int:problem_id>", methods=["DELETE"])
def delete_problem(problem_id):
    if "username" not in session:
        return "Unauthorized", 403

    user = User.query.filter_by(username=session["username"]).first()
    if not user:
        return "User not found", 404

    problem = Problem.query.get(problem_id)
    if not problem:
        return "Problem not found", 404

    # მხოლოდ პირად ამოცანებს შეუძლია წაშლა მომხმარებელმა
    if not problem.is_private or problem.owner_id != user.id:
        return "Forbidden", 403

    db.session.delete(problem)
    db.session.commit()
    return jsonify({"success": True})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
