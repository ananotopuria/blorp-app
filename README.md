# 🦠 Blorp - Phishing Simulation App

Blorp is a phishing-style web app built for educational and cybersecurity awareness purposes.  
Users are presented with realistic, misleading content and interactions to help them learn how to recognize and avoid phishing attempts.

> ⚠️ This project is part of a hackathon and is for **simulation only**. No real data is collected.

---

## 🚀 Features

- 🕹️ **Home Page** – displays randomized "suspicious offers"
- 🔐 **Login Page** – simulates phishing form (redirects to Create Page)
- 🧪 **Create Page** – lets users:
  - Enter fake virus title + subtext
  - Select between two threat-style icons
  - Generate a fake personalized virus link
- 💾 **Download Page** – auto-detects user OS (Windows/macOS) and offers the appropriate download

---

## 🧠 Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Dark/Light mode toggle via custom Theme Context

---

## ⚙️ How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/ananotopuria/blorp-app.git
cd blorp-phishing-app

# 2. Install dependencies
npm install

# 3. Run the app
npm run dev

```
