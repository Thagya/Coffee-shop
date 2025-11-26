🌟 Features

✅ Fully Responsive Design - Works seamlessly on desktop, tablet, and mobile devices
✅ Smooth Animations - Clean, interactive animations that enhance user experience
✅ Reusable Components - Modular React component architecture
✅ Modern UI/UX - Contemporary design with proper spacing and typography
✅ Semantic HTML5 - Clean, accessible markup
✅ Performance Optimized - Fast loading and smooth scrolling
✅ No Templates Used - 100% original code

coffee-shop/
├── public/
│   └── images/              # All image assets
│       ├── hero-coffee.jpg
│       ├── coffee-beans.jpg
│       ├── product1-6.jpg
│       ├── promo-left.jpg
│       ├── promo-right.jpg
│       └── customer-avatar.jpg
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CategorySection.jsx
│   │   ├── MenuItems.jsx
│   │   ├── ProductCard.jsx
│   │   ├── PromoSection.jsx
│   │   ├── Testimonials.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── Footer.jsx
│   │   └── Button.jsx
│   ├── styles/              # CSS modules
│   │   ├── index.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── CategorySection.css
│   │   ├── MenuItems.css
│   │   ├── ProductCard.css
│   │   ├── PromoSection.css
│   │   ├── Testimonials.css
│   │   ├── TestimonialCard.css
│   │   ├── Footer.css
│   │   └── Button.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
🚀 Getting Started
Prerequisites

Node.js (v14 or higher)
npm or yarn

Installation

Clone the repository

bash   git clone <your-repository-url>
   cd coffee-shop

Install dependencies
  npm install


Start development server

   npm run dev
Open http://localhost:5173 in your browser

Build for production

  npm run build
Production files will be in the dist folder
📦 Components
Reusable Components

Button - Multiple variants (primary, secondary) and sizes
ProductCard - Individual product display with like functionality
TestimonialCard - Customer review cards

Section Components

Navbar - Fixed navigation with scroll effect and mobile menu
Hero - Full-screen hero section with CTA
CategorySection - Coffee category cards with icons
MenuItems - Product carousel with 3×2 grid layout
PromoSection - Promotional content with side images
Testimonials - Customer reviews grid
Footer - Multi-column footer with social links

Animations

✨ Fade-in effects on scroll
✨ Hover effects on cards and buttons
✨ Floating hero image animation
✨ Smooth transitions throughout
✨ Interactive button animations

Interactivity

🔄 Product carousel with navigation
❤️ Like/heart buttons on products
🍔 Mobile hamburger menu
🔍 Search icon (ready for implementation)
📜 Smooth scroll navigation

🌐 Deployment
Deploy to Netlify

Build the project:
   npm run build

Go to Netlify and drag-drop the dist folder

OR Connect GitHub repository for automatic deployments
Deploy to Vercel
bashnpm i -g vercel
vercel
Follow the prompts to deploy
Deploy to GitHub Pages

Update vite.config.js:

javascript   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })

Install gh-pages:
   npm install --save-dev gh-pages

Add scripts to package.json:

json   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"

Deploy:

   npm run deploy
