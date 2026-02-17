# 🌌 PRAJWAL'S PORTFOLIO — 5TH DIMENSION

> A futuristic, immersive full-stack developer portfolio built with Flask and advanced Canvas animations.

🔗 **Live Demo:** https://my-portfolio-dun-ten-94.vercel.app/

---

## 🚀 Overview

**5TH DIMENSION** is an interactive developer portfolio combining backend engineering with immersive front-end physics animations.

This project demonstrates:

- Full-stack development
- Real-time GitHub API integration
- Physics-based UI animations
- Secure backend practices
- Performance optimization techniques

---

## ✨ Features

### 🌠 Visual Experience

- 4D Wireframe Particle Background (Canvas API)
- Dynamic Color Spectrum Cycling
- Cyberpunk Glitch Effects
- Terminal-Style Typography
- Matrix Rain Toggle Mode
- Smooth UI Hover Animations

---

### 🎮 Interactive UI System

- Delayed Gravity Cards (staggered animation physics)
- Animated Skill Matrix
- Smooth transitions across sections
- Dynamic UI response effects

---

### 🔗 GitHub Integration

- Fetches live repositories via GitHub API
- Displays language-based color indicators
- Implements caching to prevent rate-limit issues
- Handles API errors gracefully

---

### ⚙️ Backend Features

- Visitor tracking (IP + timestamp logging)
- Cached API calls
- Custom 404 and 500 error pages
- Security headers (XSS protection)
- Environment variable configuration
- SQLite database (development)

---

## 🛠️ Tech Stack

| Technology     | Purpose                          |
|---------------|----------------------------------|
| Python        | Backend logic                   |
| Flask         | Web framework & routing         |
| SQLAlchemy    | ORM & database management       |
| SQLite        | Development database            |
| HTML5/CSS3    | Layout & styling                |
| JavaScript    | Canvas animations & UI logic    |
| GitHub API    | Live repository data            |

---

## 📦 Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/PrajwalK01/My-Portfolio.git
cd My-Portfolio

2️⃣ Create Virtual Environment
Windows
python -m venv venv
venv\Scripts\activate

Mac/Linux
python3 -m venv venv
source venv/bin/activate

3️⃣ Install Dependencies
pip install -r requirements.txt

4️⃣ Configure Environment Variables

Create a .env file:

FLASK_DEBUG=True
SECRET_KEY=your-super-secret-key
DATABASE_URL=sqlite:///site.db
GITHUB_USERNAME=your-username

5️⃣ Run Application
python app.py


Open your browser:

http://127.0.0.1:5000

📂 Project Structure
My-Portfolio/
│
├── app.py
├── requirements.txt
├── Procfile
├── .env
├── .gitignore
│
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── dimension_bg.js
│   │   └── main.js
│
└── templates/
    ├── base.html
    ├── home.html
    ├── about.html
    ├── projects.html
    ├── skills.html
    ├── 404.html
    └── 500.html

🔐 Security Features

XSS protection headers

Secure environment variable handling

API rate-limit protection

Custom production-safe error pages

📈 Future Improvements

PostgreSQL production database

Redis caching layer

Docker deployment support

Admin analytics dashboard

Performance optimization (lazy loading)

Light/Dark mode toggle

👨‍💻 Author

Prajwal K
Full Stack Developer
Backend & Interactive Systems Engineer
