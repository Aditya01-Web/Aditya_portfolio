# 🚀 Developer Portfolio Website

Welcome to your modern developer portfolio website! Built with **React 18**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 📁 Clean, Easy-to-Understand Project Structure

The project has been restructured so that all styles are written directly with **responsive Tailwind CSS** on each component tag, eliminating separate conflicting CSS files.

```text
portfolio/
├── index.html                  # HTML entry point (SEO metadata, Google Fonts, root div)
├── vite.config.js              # Vite config with @tailwindcss/vite & React plugin
├── package.json                # Project dependencies
├── README.md                   # This project guide & modification reference
│
├── public/                     # Static assets (images, fonts, certificates)
│   └── assets/
│       ├── fonts/              # Peace Sans font files
│       └── images/             # Projects, profile & certificate images
│
└── src/                        # ⚡ React Application Core
    ├── main.jsx                # Application root entry point
    ├── index.css               # Central Tailwind v4 entry & font setup
    ├── App.jsx                 # Master page assembling all sections
    │
    ├── data/
    │   └── portfolioData.js    # 💡 ALL CONTENT IS HERE: Edit your text, projects & data!
    │
    ├── components/             # 🧩 UI Section Components (100% Responsive Tailwind CSS)
    │   ├── Navbar.jsx          # Header with logo, nav links, theme switcher & mobile menu
    │   ├── Hero.jsx            # Top hero banner, headline & availability badge
    │   ├── About.jsx           # About me section, bio, quote & portrait photo
    │   ├── TechStrip.jsx       # Infinite marquee strip of technologies & tools
    │   ├── Services.jsx        # Services offerings with category filter tabs
    │   ├── WhyMe.jsx           # Problem vs. solution comparison cards
    │   ├── Projects.jsx        # Featured projects grid with live demo & code links
    │   ├── Certificates.jsx    # Credential cards with preview modal
    │   ├── Process.jsx         # 4-stage client workflow
    │   ├── Testimonials.jsx    # Client reviews and feedback
    │   ├── Faq.jsx             # Interactive FAQ accordion
    │   ├── Contact.jsx         # Contact inquiry form & direct links
    │   ├── Footer.jsx          # Footer, social profiles & copyright
    │   └── ui/                 # Micro-animation & utility components
    │       ├── flip-text.jsx   # 3D character text animation
    │       ├── PageTransition.jsx # Smooth section reveal transitions
    │       └── ScrollProgress.jsx # Top scroll reading progress bar
    │
    └── lib/
        └── utils.js            # Tailwind cn() class utility helper
```

---

## 💡 How to Modify Any Content (Easiest Way)

You do **NOT** need to edit JSX code to update your portfolio text. 
All website data is centralized in one easy-to-read file:

👉 **[`src/data/portfolioData.js`](file:///c:/Users/ADMIN/OneDrive/Desktop/website/portfolio/src/data/portfolioData.js)**

| What you want to change | Variable in `src/data/portfolioData.js` |
| :--- | :--- |
| **Name, Tagline, Bio, Phone & Email** | `profileData` |
| **Social Media Links (GitHub, LinkedIn)** | `profileData.socialLinks` |
| **About Me Bio Text & Quote** | `aboutData` |
| **Why Choose Me Points** | `whyMeData` |
| **Services Offered** | `servicesData` |
| **Featured Projects & Links** | `projectsData` |
| **Certifications & Credential Links** | `certificatesData` |
| **4-Step Process Workflow** | `processSteps` |
| **Client Testimonials** | `testimonialsData` |
| **FAQ Questions & Answers** | `faqsData` |

---

## 🎨 How to Modify Styles (Tailwind CSS)

Each component in `src/components/` uses direct, responsive Tailwind CSS classes:

- **Background & Colors**:
  - Light theme: Crisp light grey background (`bg-[#eaedf0]`) with pure black font (`text-black`).
  - Dark theme: Sleek obsidian background (`dark:bg-[#09090b]`) with light text (`dark:text-white`).
  - Cards: Frosted glassmorphism (`bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-black/10 dark:border-white/10`).
- **Responsive Design**:
  - `sm:` applies styles on screens ≥ 640px (tablets / large phones).
  - `md:` applies styles on screens ≥ 768px (tablets / small laptops).
  - `lg:` applies styles on screens ≥ 1024px (desktops).
- **Interactive States**:
  - `hover:`, `focus:`, `active:`, `disabled:` classes are right on each button and input.

---

## 🛠️ Development & Deployment

### Run Locally:
```bash
npm run dev
```
Starts the Vite server at **`http://localhost:3000/`** with instant Hot Module Replacement (HMR).

### Build for Production:
```bash
npm run build
```
Generates the optimized production bundle in the `dist/` directory, ready to deploy to **Vercel**, **Netlify**, or **Cloudflare Pages**.
