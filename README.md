# 🚀 Modern Portfolio Template

A professional, high-performance, and fully responsive portfolio website built with **Next.js 16+**, **TypeScript**, and **Tailwind CSS**. Designed for developers who want a sleek, modern way to showcase their work, skills, and experience.

---

## ✨ Features

- **⚡ High Performance**: Optimized with Next.js 16+ App Router and Server Components.
- **📱 Fully Responsive**: Seamless experience across mobile, tablet, and desktop devices.
- **🎨 Modern UI/UX**: Clean aesthetic using **Shadcn UI** and **Lucide Icons**.
- **📝 Form Handling**: Integrated **React Hook Form** with **Zod** validation for the contact form.
- **🔔 Notifications**: Real-time feedback using **Sonner** toasts.
- **🔍 SEO Optimized**: Configured with Metadata API, Robots.txt, and Sitemap for better search rankings.
- **⌨️ Typewriter Effect**: Dynamic and engaging hero section with custom animations.
- **🖼️ Optimized Images**: Uses Next.js `Image` component with smart `sizes` for fast loading.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Toasts**: [Sonner](https://react-hot-toast.com/)

---

## 📁 Project Structure

Understanding the layout of this project helps in quick customization:

```text
cv_app/
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles & Tailwind directives
│   ├── layout.tsx        # Root layout with Metadata & Sidebar
│   ├── page.tsx          # Main entry point (assembles sections)
│   ├── robots.ts         # SEO: Robots configuration
│   └── sitemap.ts        # SEO: Sitemap generation
├── components/           # Reusable React components
│   ├── Pages/            # Individual section components
│   │   ├── Hero.tsx      # Landing section with typewriter effect
│   │   ├── About.tsx     # Personal bio and profile image
│   │   ├── Skills.tsx    # Technical skills categorized by area
│   │   ├── Resume.tsx    # Professional & educational timeline
│   │   ├── Portfolio.tsx # Project showcase grid
│   │   └── Contact.tsx   # Contact form with validation
│   ├── ui/               # Base UI components (Button, Card, Input, etc.)
│   └── Icons.tsx         # Custom SVG social icons
├── lib/                  # Shared utility functions (e.g., cn helper)
├── public/               # Static assets (images, profile pictures, manifest)
└── tailwind.config.ts    # Tailwind CSS design system configuration
```

---

## 💡 Ideas for Customization

This project is a solid foundation. Here are some ideas to make it your own or take it further:

1.  **Dark Mode Toggle**: The project uses Tailwind and is compatible with `next-themes`. Adding a theme switcher would be a great addition.
2.  **CMS Integration**: Connect the Portfolio section to a Headless CMS like **Sanity** or **Contentful** to manage projects without editing code.
3.  **Blog Section**: Add a `/blog` route using MDX to share your thoughts and technical tutorials.
4.  **Backend Integration**: Replace the mock submission in `Contact.tsx` with a real service like **Formspree**, **EmailJS**, or a custom **Next.js API Route**.
5.  **Interactive Resume**: Enhance the Resume section with a "Download PDF" button that generates a CV on the fly.
6.  **Animations**: Integrate **Framer Motion** for scroll-triggered animations and smoother transitions between sections.

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18.18.0 or later (Required for Next.js 15/16)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shitalsapkota/portfolio_new.git
    cd portfolio_new/cv_app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Deployment

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new). Simply push your code to GitHub and import the project.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Developed with ❤️ by [Shital Sapkota](https://shitalsapkotaportfolio.vercel.app/)