# Shailendra Patidar — AI/ML & Python Developer Portfolio

A production-ready, editorial-style personal portfolio engineered for **Shailendra Patidar**, an aspiring AI/ML and Python Developer. Designed with digital agency craftsmanship, incorporating smooth scroll choreography, refined typography, and verified architectural showcases.

---

## 🌟 Key Features

- **Editorial Luxury Design**: Deep charcoal/midnight black palette (`#09090b`), warm ivory typography, and subtle champagne gold/bronze metallic accents.
- **Cinematic Preloader**: Animated "SP" monogram reveal with dynamic progress indicator and ambient light pulses. Remembers session state to ensure smooth page navigation without repeated delay.
- **Magnetic Custom Cursor**: Physics-based spring tracking on desktop with interactive hover expansion; gracefully disabled on mobile and touch devices.
- **Inertial Smooth Scrolling**: Powered by **Lenis** for agency-grade scroll dampening, respecting user `prefers-reduced-motion` settings.
- **Interactive Technical Capabilities**: Organized skill taxonomies across AI & Machine Learning, Programming Languages, Backend, Database Systems, and Frontend—without misleading percentage bars.
- **Deep-Dive Project Showcases**:
  1. **CallDR – Smart Healthcare Platform**: FastAPI, React, MySQL, Machine Learning, RAG clinical triage.
  2. **Medical Report Analysis**: Python, FastAPI, PaddleOCR, and LLM clinical extraction.
  3. **Heart Disease Prediction**: Python, Pandas, Scikit-learn, KNN classification, and Streamlit UI.
  4. **RAG Document QA System**: Chunking, vector embeddings, similarity search, and cited generation.
- **Integrated PDF Document Viewer**: Embedded at `/resume.pdf` with full-screen toggle, download action, and fallback tab opening for both desktop and mobile.
- **Production Contact Dispatch**: Direct API endpoint (`/api/contact`) with schema validation, email copy-to-clipboard, and extensible Resend API support.
- **SEO & Search Console Optimization**: Dynamic `sitemap.ts`, `robots.ts`, Open Graph / Twitter cards, and JSON-LD structured schemas (`Person` & `WebSite`).

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/) & [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Playfair Display (Serif) & Plus Jakarta Sans (Modern Sans-serif) via `next/font/google`

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/shailendra-patidar/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://shailendra-patidar.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=shailendra.patidar.dev@gmail.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/shailendra-patidar
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/shailendra-patidar

# Optional: Add for live production email delivery via Resend
RESEND_API_KEY=re_your_api_key_here
CONTACT_RECIPIENT_EMAIL=shailendra.patidar.dev@gmail.com
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 Adding Your Profile Photo & Resume

1. **Profile Photo**: Place your portrait photograph at `public/images/profile.jpg`. The website automatically applies the custom framing, editorial lighting, and responsive aspect ratios.
2. **Resume PDF**: Replace `public/resume.pdf` with your updated resume PDF at any time.

---

## 🚢 Deploying to Vercel

The portfolio is pre-configured for one-click deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub.
2. Log in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your repository. Next.js will be detected automatically.
4. Add your environment variables in the Vercel project settings (`NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, etc.).
5. Click **Deploy**.

### Custom Domain Setup:
1. In the Vercel dashboard, go to **Settings > Domains**.
2. Enter your custom domain (e.g. `shailendra.dev` or `shailendrapatidar.com`).
3. Add the recommended CNAME or A-records in your DNS provider (e.g., Cloudflare, Namecheap, GoDaddy).

---

## 🏛️ Project Structure

```
├── app/
│   ├── about/
│   │   └── page.tsx           # Detailed journey, experience & timeline
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Validated contact dispatch handler
│   ├── projects/
│   │   └── page.tsx           # Advanced architectural showcase
│   ├── resume-contact/
│   │   └── page.tsx           # Embedded PDF viewer & contact form
│   ├── globals.css            # Custom typography & styles
│   ├── layout.tsx             # Root layout, JSON-LD, Lenis & Navigation
│   ├── page.tsx               # Cinematic homepage
│   ├── robots.ts              # Search engine robots configuration
│   └── sitemap.ts             # Dynamic XML sitemap
├── components/
│   ├── AboutPreview.tsx       # Homepage narrative summary
│   ├── ContactForm.tsx        # Validated dispatch form
│   ├── CustomCursor.tsx       # Kinetic magnetic cursor
│   ├── FeaturedProjects.tsx   # Homepage project highlights
│   ├── FinalCTA.tsx           # Conversion footer banner
│   ├── Footer.tsx             # Editorial site footer
│   ├── Hero.tsx               # Split-layout hero section
│   ├── Navbar.tsx             # Sticky responsive navigation
│   ├── Preloader.tsx          # Monogram reveal & loader
│   ├── ProjectCard.tsx        # Project card with quick preview
│   ├── ProjectModal.tsx       # Deep architectural detail modal
│   ├── ResumeViewer.tsx       # PDF viewer with download & fullscreen
│   ├── ScrollProgress.tsx     # Viewport scroll progress indicator
│   ├── SkillsSection.tsx      # Categorized capabilities
│   ├── SmoothScroll.tsx       # Lenis wrapper
│   └── Timeline.tsx           # Vertical milestone tracker
├── data/
│   └── portfolio.ts           # Verified data models & project specs
├── public/
│   ├── images/
│   │   ├── profile.jpg        # Portrait placeholder
│   │   └── projects/          # Custom SVG architecture visuals
│   └── resume.pdf             # Verified curriculum vitae PDF
└── types/
    └── portfolio.ts           # TypeScript interfaces
```

---

## ⚖️ License

Crafted for **Shailendra Patidar**. All rights reserved.
