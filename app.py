from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os
import requests
from dotenv import load_dotenv
from functools import lru_cache

load_dotenv()

app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///site.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-key-change-this')

db = SQLAlchemy(app)

# Database Model
class Visit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    user_ip = db.Column(db.String(50), nullable=True)

    def __repr__(self):
        return f"Visit(id={self.id}, timestamp={self.timestamp})"

# Helper to record visits
def record_visit():
    try:
        if request.headers.getlist("X-Forwarded-For"):
            visitor_ip = request.headers.getlist("X-Forwarded-For")[0]
        else:
            visitor_ip = request.remote_addr

        # Don't record local/dev visits
        if visitor_ip in ['127.0.0.1', 'localhost'] and app.debug:
            return

        new_visit = Visit(user_ip=visitor_ip)
        db.session.add(new_visit)
        db.session.commit()
    except Exception as e:
        print(f"Error recording visit: {e}")
        db.session.rollback()

# GitHub API with caching
@lru_cache(maxsize=1)
def get_github_repos(username):
    try:
        response = requests.get(
            f"https://api.github.com/users/{username}/repos?sort=updated&per_page=100",
            timeout=5,
            headers={
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'My-Portfolio-App'
            }
        )
        if response.status_code == 200:
            return response.json()
        elif response.status_code == 403:
            print("GitHub API rate limit exceeded")
            return []
        else:
            print(f"GitHub API error: {response.status_code}")
            return []
    except requests.exceptions.RequestException as e:
        print(f"Error fetching GitHub repos: {e}")
        return []
    except Exception as e:
        print(f"Unexpected error: {e}")
        return []

@lru_cache(maxsize=1)
def get_github_profile(username):
    try:
        response = requests.get(
            f"https://api.github.com/users/{username}",
            timeout=5,
            headers={
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'My-Portfolio-App'
            }
        )
        if response.status_code == 200:
            return response.json()
        return {}
    except Exception as e:
        print(f"Error fetching GitHub profile: {e}")
        return {}

# Routes
@app.route('/')
def home():
    record_visit()
    profile = get_github_profile('PrajwalK01')
    return render_template('home.html', title=">_ Prajwal", profile=profile)

@app.route('/about')
def about():
    return render_template('about.html', title=">_ About")

@app.route('/projects')
def projects():
    repos = get_github_repos('PrajwalK01')
    return render_template('projects.html', title=">_ Projects", repos=repos)

@app.route('/skills')
def skills():
    return render_template('skills.html', title=">_ Skills")

# Error handlers
@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    db.session.rollback()
    return render_template('500.html'), 500

# Security headers
@app.after_request
def add_security_headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'SAMEORIGIN'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
    return response

# Context processor for template variables
@app.context_processor
def inject_now():
    return {
        'now': datetime.utcnow(),
        'github_username': 'PrajwalK01'
    }

# Initialize DB
def init_db():
    with app.app_context():
        db.create_all()
        print("Database initialized!")

if __name__ == '__main__':
    init_db()
    debug_mode = os.environ.get('FLASK_DEBUG', 'False').lower() == 'true'
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=debug_mode, host='0.0.0.0', port=port)