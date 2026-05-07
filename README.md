# TEDx Redeemers University — Official Website

> The official marketing website for **TEDx Redeemers University**, built to showcase speakers, event details, and the ideas worth spreading at our campus TEDx event.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) |
| Bundler | [Vite 6](https://vitejs.dev) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Particles | [tsParticles](https://particles.js.org/) |
| Icons | [Lucide React](https://lucide.dev) · [Tabler Icons](https://tabler.io/icons) |

---

## 📁 Project Structure

```
src/
├── sections/
│   ├── Navbar.tsx       # Fixed top navigation bar
│   ├── Hero.tsx         # Full-screen hero with particle background
│   ├── DateTicker.tsx   # Animated countdown / date display
│   ├── About.tsx        # About TEDx section
│   ├── AboutRun.tsx     # About the specific run / theme
│   ├── Speakers.tsx     # Speaker cards grid
│   ├── Cta.tsx          # Call-to-action / registration prompt
│   ├── Faq.tsx          # Frequently asked questions (accordion)
│   └── Footer.tsx       # Site footer
├── components/          # Shared reusable UI components
├── assets/              # Static images and brand assets
├── lib/                 # Utility helpers
├── App.tsx              # Root component — assembles all sections
├── main.tsx             # React DOM entry point
└── index.css            # Global styles & Tailwind directives
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** v18 or later — [download here](https://nodejs.org)
- **npm** (comes bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/Tedx-Redeemers-University.git

# 2. Navigate into the project
cd Tedx-Redeemers-University

# 3. Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page hot-reloads as you edit files.

### Other Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Type-check + compile production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## 🎨 Brand Guidelines

- **Primary color:** `#EB0028` (TED Red)
- **Background:** `#000000` (Pure Black)
- **Typography:** Montserrat (loaded via Google Fonts)
- **Theme:** *Ideas Worth Spreading* — Nexus Edition

---

## 🌐 Deployment

The site is deployed via **Vercel**. Every push to `main` triggers an automatic production deployment.

- Production URL: _add your Vercel URL here_
- Build command: `npm run build`
- Output directory: `dist`

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push and open a Pull Request

---

## 📄 License

This project is maintained by the **TEDx Redeemers University** organizing team. All TED and TEDx branding elements are property of [TED Conferences, LLC](https://www.ted.com).
