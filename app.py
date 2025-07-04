from flask import Flask, render_template, request, jsonify, redirect, send_from_directory, url_for
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

# PostgreSQL connection string
# Make sure you replace this with your actual connection string
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:gzeLeuznnVNTAVFLWPIXEKlhYYgNlkAj@interchange.proxy.rlwy.net:47942/railway'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.Text, nullable=False)
    role = db.Column(db.String(20), default='member')

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

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    if not username or not password:
        return "All fields are required.", 400

    user = User.query.filter_by(username=username).first()
    if not user:
        return "User not found.", 404

    if not check_password_hash(user.password_hash, password):
        return "Incorrect password.", 400

    return f"Welcome, {user.username}! You are logged in as {user.role}."

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

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)