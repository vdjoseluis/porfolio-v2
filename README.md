# Portfolio – José Luis Vásquez Drouet

![Astro](https://img.shields.io/badge/Astro-5.x-orange?logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
![License](https://img.shields.io/badge/License-Personal-lightgrey)

Personal portfolio built with **Astro**, focused on performance, internationalization, and clean architecture.  
Designed as a professional showcase with SPA navigation, SSR deployment, and a fully functional contact system.

🌐 **Live demo:** https://vdjoseluis.vercel.app  
📁 **Repository:** https://github.com/vdjoseluis/portfolio-v2

---

## ✨ Features

- 🌍 **Multilingual support** (Spanish, English, Italian)
- 🌓 **Light / Dark mode** with persistence
- ⚡ **SPA navigation** using Astro ClientRouter
- 📄 **Dynamic CV download** based on selected language
- 📬 **Contact form** with backend email delivery (Resend)
- 📱 **Responsive design** (mobile-first)
- 🎨 **Tailwind CSS** styling
- 🚀 **SSR deployment on Vercel**
- 🔒 Clear client/server separation

---

## 🧱 Tech Stack

### Frontend
- Astro
- TypeScript
- JavaScript (ES Modules)
- Tailwind CSS
- HTML5 / CSS3

### Backend
- Astro API Endpoints
- Resend (email service)
- Vercel Serverless Functions

### Tooling & Deployment
- Vite
- Git / GitHub
- PNPM
- Vercel

---

## 📁 Project Structure

```txt
/
├── public/
│   ├── cv/                  # CV PDFs per language
│   ├── skills/              # Skill SVG icons
│   ├── scripts/             # Client-side JS (theme, menu, nav, contact)
│   └── assets/              # Static assets
│
├── src/
│   ├── components/          # Reusable Astro components
│   ├── layouts/             # Global layout
│   ├── i18n/                # Translation files
│   ├── pages/
│   │   ├── [lang]/          # Language-based routes
│   │   └── api/             # Backend endpoints
│   └── styles/              # Global styles
│
├── astro.config.mjs
├── tailwind.config.js
└── README.md
```

## 🌍 Internationalization (i18n)

The website supports three languages:

- Spanish (`/es`)
- English (`/en`)
- Italian (`/it`)

Language routing is handled via dynamic routes:

```txt
src/pages/[lang]/index.astro
```

Translations are stored in:
```txt
src/i18n/
├── es.json
├── en.json
└── it.json
```

The active language controls:

- UI text
- Navigation links
- CV download
- Redirect behavior
---

## 🌓 Light / Dark Mode

- Implemented with client-side JavaScript
- Theme preference stored in localStorage
- Falls back to prefers-color-scheme
- Images and SVGs adapt to the selected theme

```
public/scripts/theme.js
```
---

## 📱  Mobile menu
- Custom mobile navigation
- Fullscreen overlay
- Background blur
- Click outside closes the menu
- SPA-safe with Astro transitions
```
public/scripts/mobileMenu.js
```
---
## 📬 Contact Form 
Frontend
- Implemented in `contact.astro`
- Client-side logic in `public/contact.js`
- Fetch API
- Multilingual feedback
- Works with SPA navigation

Backend
```
src/pages/api/contact.ts
```

Features:
- Server-side validation
- Email RegEx validation
- Secure environment variables
- Email delivery via Resend
- Proper HTTP status responses
---
## 🔒 Environment Variables
Local `.env` file:
```
RESEND_API_KEY=your_api_key
MAIL_TO=your_email@example.com
MAIL_FROM=Portfolio <onboarding@resend.dev>

```
Vercel:
```
Project Settings → Environment Variables
```

Enabled for:
- Production
- Preview
- Development
---
## 📄 CV Download
```
public/cv/
```
Available in:
- Spanish
- English
- Italian

The correct CV is downloaded automatically based on the selected language.

---
## 🚀 Deployment
- Deployed on Vercel
- Astro SSR
- Automatic deployments on `git push`
- No CLI deployment required
---
## 🌐 Notes & Lessons Learned
- Paths are case-sensitive on Linux / Vercel
- DOMContentLoaded is unreliable with SPA navigation
- Use Astro lifecycle events:
  - `astro:page-load`
  - `astro:after-swap`
- Scripts in `/public` must use `is:inline`
- Never access `document` or `window` during SSR
- Keep strict client / server separation
---
## 👤 Author

**José Luis Vásquez Drouet**  
Web & Multiplatform Developer 🚀

- 💻 **GitHub:** https://github.com/vdjoseluis  
- 💼 **LinkedIn:** https://www.linkedin.com/in/vdjoseluis  
- 📧 **Email:** vdjoseluis@outlook.com  

---

## 📜 License

🔒 **All Rights Reserved**

This project has been created for **personal and professional showcase purposes only**.

- ❌ Redistribution is not allowed  
- ❌ Commercial use is not permitted  
- ❌ Modification without permission is prohibited  

If you are interested in using any part of this project,  
please **contact the author directly** 📩.
