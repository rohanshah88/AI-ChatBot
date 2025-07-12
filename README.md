# 🤖 Gemini AI Chatbot — Conversational App with Google Gemini API

![GitHub last commit](https://img.shields.io/github/last-commit/rohanshah88/ai-chatbot?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/rohanshah88/ai-chatbot?style=for-the-badge)
![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow?style=for-the-badge)
![Deploy on Render](https://img.shields.io/badge/Deployed%20on-Render-blue?style=for-the-badge)

---

> ⚡ **Live Demo**: [Click to Open the Chatbot](https://your-app-name.onrender.com)  
> 📦 **Source Code**: [GitHub Repository](https://github.com/rohanshah88/ai-chatbot)

---

## ✨ Overview

A fully functional and intelligent AI chatbot built using **HTML, CSS, JavaScript**, and a secure **Node.js + Express backend**. It uses **Google’s Gemini API (gemini-1.5-flash)** to generate responses and supports both **text** and **image** inputs.

---

## 🧠 Features

- ✅ Natural language processing via Gemini 1.5
- 🖼 Accepts image inputs via file upload
- 🧾 Displays loading animation while waiting for response
- 🔒 Secure `.env` setup — API key never exposed
- 💡 Clean and responsive UI
- 🌍 Deployed with [Render](https://render.com)

---

## 📸 Screenshot

![Gemini Chatbot Preview](C:\Users\Rohan Shah\OneDrive\Desktop\AI-ChatBot\chat.png) <!-- Optional - replace with your actual screenshot -->

---

## ⚙️ Tech Stack

| Technology      | Usage                          |
|----------------|---------------------------------|
| HTML/CSS/JS     | Frontend UI                     |
| Node.js + Express | Backend API routing & security |
| Google Gemini API | AI response engine             |
| Render          | Free hosting / deployment       |
| .env            | Secure API key storage          |

---

## 📁 Folder Structure

ai-chatbot/
├── public/ # Frontend files
│ ├── index.html
│ ├── script.js
│ ├── style.css
│ └── loading.webp, ai.png, etc.
├── server.js # Express server
├── .env # Gemini API key (not pushed)
├── .gitignore # Prevents pushing sensitive files
├── README.md # This file!
└── package.json


---

## 🔧 Local Development Setup

```bash
# 1. Clone the repo
git clone https://github.com/rohanshah88/ai-chatbot.git
cd ai-chatbot

# 2. Install dependencies
npm install

# 3. Create .env file
touch .env
# Paste this inside .env
GEMINI_API_KEY=your_api_key_here

# 4. Start the server
node server.js

# 5. Visit in browser
http://localhost:3000

🌐 Deployment (Free via Render)
This project is deployed using Render.com:

Push your code to GitHub

Go to Render → New Web Service

Connect your repo

Set:

Build Command: npm install

Start Command: node server.js

Root: (leave blank if server.js is in root)

Add Environment Variable:

Key: GEMINI_API_KEY

Value: your actual key

Click Deploy

🎉 Your chatbot will be live!

🙋‍♂️ About the Developer
Rohan Shah
📧 itsrohanshah88@gmail.com
🌐 Portfolio
🐙 GitHub
💼 LinkedIn

🛡 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Google Gemini API

Render.com

Node.js

YouTube & Docs for Express setup inspiration