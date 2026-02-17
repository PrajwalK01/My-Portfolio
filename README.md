# 🌌 Prajwal's Portfolio - 5th Dimension

**Live Demo:** https://vercel.com/prajwalk01s-projects/my-portfolio

Welcome to the **5th Dimension**. This is a futuristic, highly interactive developer portfolio built with **Python (Flask)** and **Canvas API**. It features a continuously moving hyper-dimensional background, delayed gravity animations, and dynamic GitHub integration.

![Portfolio Preview](https://github.com/PrajwalK01/My-Portfolio/raw/main/preview.png)

## 🚀 Features

### 🌠 Visual Experience
- **Immersive 4D Background**: Rotating wireframe particles with depth perception
- **Color-Shifting Environment**: Background slowly transitions through the spectrum
- **Glitch Effects**: Cyberpunk-inspired text animations
- **Terminal Interface**: Hacking-style typography throughout

### 🎮 Interactive Elements
- **Delayed Gravity Cards**: Navigation cards "fall" into place with staggered timing
- **GitHub Integration**: Live repository fetching with language colors
- **Matrix Rain Effect**: On skills page (optional toggle)
- **Smooth Animations**: All hover states and transitions

### ⚙️ Backend Features
- **Visit Tracking**: Records visitor IPs and timestamps
- **Cached API Calls**: Prevents GitHub rate limiting
- **Error Handling**: Custom 404/500 pages
- **Security Headers**: XSS protection, frame options, etc.

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Python/Flask** | Backend server & routing |
| **SQLAlchemy** | Database ORM |
| **HTML5/CSS3** | Structure & styling |
| **JavaScript** | Canvas animations & interactivity |
| **GitHub API** | Fetch live repository data |
| **SQLite** | Development database |

## 📦 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/PrajwalK01/My-Portfolio.git
   cd My-Portfolio

2. **Create a Virtual Environment**

bash
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate

3. **Install Dependencies**

bash
pip install -r requirements.txt

Set up Environment Variables
Create a .env file:

4. **env**
FLASK_DEBUG=True
SECRET_KEY=your-super-secret-key-here
DATABASE_URL=sqlite:///site.db

5. **Run the Application**

bash
python app.py
Open your browser and navigate to: http://127.0.0.1:5000



**📂 Project Structure**
text
My-Portfolio/
│
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── Procfile              # Render deployment config
├── .env                  # Environment variables (local)
├── .gitignore            # Git ignore rules
│
├── static/
│   ├── css/
│   │   └── style.css     # All styles
│   └── js/
│       ├── dimension_bg.js  # 4D background animation
│       └── main.js        # UI interactions
│
└── templates/
    ├── base.html         # Base template
    ├── home.html         # Landing page
    ├── about.html        # About me page
    ├── projects.html     # GitHub projects
    ├── skills.html       # Skills matrix
    ├── 404.html          # Not found page
    └── 500.html          # Server error page
