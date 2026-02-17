🌌 Prajwal's Portfolio – 5th Dimension
🚀 Welcome to the 5th Dimension — a futuristic, interactive developer portfolio built with Python (Flask) and Canvas API. It features a hyper-dimensional background, delayed gravity animations, and dynamic GitHub integration.

🔗 Live Demo: https://my-portfolio-dun-ten-94.vercel.app/

✨ Features
🌠 Visual Experience
Immersive 4D Background with wireframe particles

Color-Shifting Environment that cycles through the spectrum

Cyberpunk-style Glitch Effects

Terminal Typography for a hacking-inspired interface

🎮 Interactive Elements
Delayed Gravity Cards with staggered animations

GitHub Integration showing live repositories with language colors

Matrix Rain Effect toggle on skills page

Smooth Hover Animations across UI

⚙️ Backend Features
Visitor Tracking (IP + timestamp)

Cached API Calls to avoid GitHub rate limits

Custom Error Pages (404/500)

Security Headers for XSS protection

🛠️ Tech Stack
Technology	Purpose
Python/Flask	Backend server & routing
SQLAlchemy	Database ORM
HTML5/CSS3	Structure & styling
JavaScript	Canvas animations & interactivity
GitHub API	Fetch live repository data
SQLite	Development database
📦 Installation
Clone the Repository

bash
git clone https://github.com/PrajwalK01/My-Portfolio.git
cd My-Portfolio
Create a Virtual Environment

bash
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
Install Dependencies

bash
pip install -r requirements.txt
Set up Environment Variables  
Create a .env file:

env
FLASK_DEBUG=True
SECRET_KEY=your-super-secret-key-here
DATABASE_URL=sqlite:///site.db
Run the Application

bash
python app.py
Then open: http://127.0.0.1:5000

📂 Project Structure
Code
My-Portfolio/
│
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── Procfile               # Deployment config
├── .env                   # Environment variables (local)
├── .gitignore             # Git ignore rules
│
├── static/
│   ├── css/
│   │   └── style.css      # Styles
│   ├── js/
│   │   ├── dimension_bg.js # 4D background animation
│   │   └── main.js        # UI interactions
│
└── templates/
    ├── base.html          # Base template
    ├── home.html          # Landing page
    ├── about.html         # About me page
    ├── projects.html      # GitHub projects
    ├── skills.html        # Skills matrix
    ├── 404.html           # Not found page
    └── 500.html           # Server error page
