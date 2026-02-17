🌌 Prajwal's Portfolio – 5th Dimension
<div align="center">

<!-- Logo -->
<img src="static/logo.png" alt="Portfolio Logo" width="120" height="120">

<h3>🚀 Enter the 5th Dimension</h3>
<p>A futuristic, interactive developer portfolio built with <b>Python (Flask)</b> and <b>Canvas API</b>.</p>

<a href="https://my-portfolio-dun-ten-94.vercel.app/"><b>🔗 Live Demo</b></a>

</div>

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
│   └── logo.png           # Portfolio logo
│
└── templates/
    ├── base.html          # Base template
    ├── home.html          # Landing page
    ├── about.html         # About me page
    ├── projects.html      # GitHub projects
    ├── skills.html        # Skills matrix
    ├── 404.html           # Not found page
    └── 500.html           # Server error page
🖼️ Adding a Logo
Place your logo file inside static/ (e.g., static/logo.png).

In your README, reference it like this:

markdown
<img src="static/logo.png" alt="Portfolio Logo" width="120" height="120">
src points to the file path.

alt is the description (important for accessibility).

width/height control size.

If you want the logo to glow or match your anti-gravity theme, you can style it in style.css:

css
img[alt="Portfolio Logo"] {
    filter: drop-shadow(0 0 10px cyan);
    animation: float 4s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
