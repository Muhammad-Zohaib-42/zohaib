# 🌐 Muhammad Zohaib — Developer Portfolio

A clean, fully responsive personal portfolio website built with **Next.js** and **Tailwind CSS**. This repo is **open source** and can be used as a template by anyone who wants to build their own developer portfolio.

🔗 **Live Demo:** [zohaibdev-official.vercel.app](https://zohaibdev-official.vercel.app/)

---

## ✨ Features

- ⚡ Built with **Next.js** for fast performance
- 🎨 Styled with **Tailwind CSS**
- 📧 Contact form powered by **EmailJS** (no backend needed)
- 📱 Fully **responsive** — works on all screen sizes
- 🗂️ Sections: Hero, Skills, Experience, Projects, Contact
- 🚀 Deployed on **Vercel**

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js | React Framework |
| Tailwind CSS | Styling |
| EmailJS | Contact Form Email Service |
| Vercel | Deployment |

---

## 📁 Sections Overview

- **Hero** — Introduction and CTA
- **Skills** — Tech stack with scrolling animation
- **Experience** — Work history timeline
- **Projects** — Project cards with live links
- **Contact** — EmailJS powered contact form

---

## 🧑‍💻 Use This As Your Own Portfolio Template

This project is **open source**. If you like the design, feel free to fork it and customize it for your own portfolio.

### Step 1 — Fork & Clone
```bash
# Fork this repo on GitHub, then clone it
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME
```

### Step 2 — Install Dependencies
```bash
npm install
```

### Step 3 — Setup EmailJS

1. Go to [emailjs.com](https://www.emailjs.com/) and create a free account
2. Create a **Service**, **Template**, and get your **Public Key**
3. Create a `.env.local` file in the root folder and add:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Step 4 — Customize Your Info

Update the following with your own details:

- 👤 **Your name & bio** — `src/` folder mein Hero section
- 💼 **Experience** — apni job history update karein
- 🗂️ **Projects** — apne projects ki images aur links lagayein
- 🛠️ **Skills** — jo technologies aap jaante hain woh rakhein
- 📞 **Contact info** — apna email, phone aur location update karein
- 🖼️ **Your photo** — `public/` folder mein apni image replace karein
- 📄 **Resume** — `public/` folder mein apna CV replace karein

### Step 5 — Run Locally
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 6 — Deploy on Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or simply connect your GitHub repo to [vercel.com](https://vercel.com) and it will auto-deploy.

---

## 📸 Preview

![Portfolio Preview](https://zohaibdev-official.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzohaib.d5378488.webp&w=1200&q=75)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Credits

Designed & Developed by **Muhammad Zohaib**
[🌐 Portfolio](https://zohaibdev-official.vercel.app/) • [📧 Email](mailto:muhammadzohaibranjha42@gmail.com)
