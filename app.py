from flask import (
    Flask, render_template, request, jsonify,
    redirect, send_from_directory, session, url_for
)
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

from werkzeug.utils import secure_filename
import os
from flask_migrate import Migrate

app = Flask(__name__)
app.secret_key = "super_secret_key_123"

# PostgreSQL connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:gzeLeuznnVNTAVFLWPIXEKlhYYgNlkAj@interchange.proxy.rlwy.net:47942/railway'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

UPLOAD_FOLDER = os.path.join("static", "uploads")
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.Text, nullable=False)
    role = db.Column(db.String(20), default='member')

class Problem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image_filename = db.Column(db.String(255), nullable=False)
    tags = db.Column(db.String(255))
    difficulty = db.Column(db.Integer)

# Create DB tables
with app.app_context():
    db.create_all()
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)

# Helpers
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

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

        if User.query.filter((User.username == username) | (User.email == email)).first():
            return "Username or email already exists.", 400

        hashed_pw = generate_password_hash(password, method="pbkdf2:sha256")
        user = User(username=username, email=email, password_hash=hashed_pw)
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
        return redirect(url_for("serve_index"))

    return render_template("login.html")

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("serve_index"))

@app.route("/api/whoami")
def whoami():
    return jsonify({"username": session.get("username")})

@app.route("/upload_problem", methods=["POST"])
def upload_problem():
    if "image" not in request.files:
        return "No image file.", 400

    file = request.files["image"]
    if file.filename == "" or not allowed_file(file.filename):
        return "Invalid file.", 400

    filename = secure_filename(file.filename)
    file.save(os.path.join(UPLOAD_FOLDER, filename))

    difficulty = int(request.form.get("difficulty", 3))
    tags = request.form.get("tags", "")

    problem = Problem(
        image_filename=filename,
        tags=tags,
        difficulty=difficulty
    )
    db.session.add(problem)
    db.session.commit()

    return "Problem uploaded."

@app.route("/api/problems")
def get_problems():
    problems = Problem.query.all()
    return jsonify([
        {
            "id": p.id,
            "image_url": url_for("uploaded_file", filename=p.image_filename),
            "tags": p.tags or "",
            "difficulty": p.difficulty
        }
        for p in problems
    ])

@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route("/api/delete_problem/<int:problem_id>", methods=["POST"])
def delete_problem(problem_id):
    problem = Problem.query.get(problem_id)
    if not problem:
        return "Problem not found.", 404

    # Remove image file
    try:
        os.remove(os.path.join(UPLOAD_FOLDER, problem.image_filename))
    except Exception:
        pass  # Ignore file deletion errors

    db.session.delete(problem)
    db.session.commit()
    return "Problem deleted."

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
