from app import app, db, User
from werkzeug.security import generate_password_hash

def create_admin():
    username = "lomta"
    email = "davidlom2008@gmail.com"
    password = "DATdat08@"  # 🚨 Change this

    existing = User.query.filter_by(username=username).first()
    if existing:
        print("Admin user already exists!")
        return

    hashed_pw = generate_password_hash(password, method="pbkdf2:sha256")

    admin = User(
        username=username,
        email=email,
        password_hash=hashed_pw,
        role="admin"
    )
    db.session.add(admin)
    db.session.commit()
    print("✅ Admin user created successfully.")

if __name__ == "__main__":
    with app.app_context():
        create_admin()
