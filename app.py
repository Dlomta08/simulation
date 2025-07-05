from flask import Flask, render_template, request, jsonify, redirect, send_from_directory, session, url_for
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import os
from werkzeug.utils import secure_filename

from flask_migrate import Migrate

app = Flask(__name__)
app.secret_key = "super_secret_key_123"


# PostgreSQL connection string

# Make sure you replace this with your actual connection string
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:HxUppyuPWngdmEvaryagXFjDqNFhuuYh@switchback.proxy.rlwy.net:51020/railway'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)



# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.Text, nullable=False)
    role = db.Column(db.String(20), default='member')
    avatar_filename = db.Column(db.String(255), nullable=True)

with app.app_context():
    db.create_all()

@app.route("/")
def serve_index():
    return send_from_directory("static", "index.html")

@app.route("/<path:filename>")
def serve_static_files(filename):
    return send_from_directory("static", filename)

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')

        if not username or not email or not password:
            return "All fields are required.", 400

        if User.query.filter((User.username == username) | (User.email == email)).first():
            return "Username or email already exists.", 400

        # Use shorter sha256 hashes
        hashed_pw = generate_password_hash(password, method='pbkdf2:sha256')

        new_user = User(
            username=username,
            email=email,
            password_hash=hashed_pw
        )
        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for('serve_index'))

    return render_template("register.html")

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        if not username or not password:
            return "All fields are required.", 400

        user = User.query.filter_by(username=username).first()
        if not user:
            return "User not found.", 404

        if not check_password_hash(user.password_hash, password):
            return "Incorrect password.", 400

        session['username'] = user.username
        return redirect(url_for('serve_index'))

    # ✅ Serve the login form if GET
    return render_template("login.html")


@app.route('/users')
def list_users():
    users = User.query.all()
    return jsonify([
        {
            "id": u.id,
            "username": u.username,
            "email": u.email,
            "role": u.role
        } for u in users
    ])

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('serve_index'))

@app.route("/api/whoami")
def whoami():
    if "username" in session:
        return jsonify({"username": session["username"]})
    else:
        return jsonify({"username": None})
    
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


if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)