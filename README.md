# Ryze AI Website Redesign

A modern, professional redesign of the Ryze AI advertising analytics platform website built with React, HTML, CSS, and JavaScript.

## 🎯 Project Overview

This redesign focuses on:
- **Visual Appeal**: Modern gradient design, smooth animations, and clean typography
- **User Experience**: Intuitive navigation, clear CTAs, and mobile-first responsive design
- **Clear Communication**: Straightforward messaging about Ryze's AI-powered advertising analytics
- **Modular Architecture**: Reusable React components for easy maintenance and updates

## 🚀 Features

### Pages Implemented
1. **Homepage** - Hero section, features overview, how it works, testimonials, CTA, and pricing preview
2. **Features Page** - Detailed feature breakdown with benefits and visual placeholders
3. **Pricing Page** - Three pricing tiers with billing toggle, FAQ section, and CTAs

### Modular Components
- **Header** - Sticky navigation with scroll effect and mobile menu
- **Hero** - Eye-catching hero section with animated dashboard mockup
- **Features** - Grid-based feature cards with hover effects
- **Testimonials** - Customer reviews with stats section
- **Pricing Section** - Interactive pricing cards with monthly/annual toggle
- **Footer** - Comprehensive footer with links and social media

### Design Highlights
- Custom CSS variables for consistent design system
- Gradient color scheme (Indigo primary, Green secondary, Amber accent)
- Smooth animations and micro-interactions
- Fully responsive across mobile, tablet, and desktop
- Accessible and WCAG compliant

## 📦 Installation

1. Navigate to the project directory:
```bash
cd ryze-website-redesign
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will open at `http://localhost:3000`

## 🏗️ Project Structure

```
ryze-website-redesign/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── Features.js
│   │   ├── Features.css
│   │   ├── Testimonials.js
│   │   ├── Testimonials.css
│   │   ├── PricingSection.js
│   │   ├── PricingSection.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/              # Page components
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── FeaturesPage.js
│   │   ├── FeaturesPage.css
│   │   ├── PricingPage.js
│   │   └── PricingPage.css
│   ├── styles/
│   │   └── global.css      # Global styles & CSS variables
│   ├── App.js              # Main app with routing
│   └── index.js            # React entry point
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#6366f1)
- **Secondary**: Green (#10b981)
- **Accent**: Amber (#f59e0b)
- **Text**: Slate tones
- **Background**: White and light grays

### Typography
- **Font Family**: Inter (Google Fonts)
- **Scale**: Fluid typography with responsive sizing
- **Weights**: 300-800 for hierarchy

### Spacing & Layout
- Consistent spacing scale (0.25rem to 4rem)
- Max-width containers for readability
- Grid-based layouts for flexibility

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Mobile**: 480px and below
- **Tablet**: 768px and below
- **Desktop**: 1024px and below
- **Large Desktop**: 1200px+

## 🔧 Customization

### Updating Colors
Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #10b981;
  /* ... */
}
```

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.js`
3. Update navigation in `src/components/Header.js`

### Modifying Components
Each component is self-contained with its own CSS file for easy customization.

## 🚢 Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

## 💡 Key Improvements Over Original

1. **Modern Design**: Clean, gradient-based design with depth and visual hierarchy
2. **Better UX**: Clear navigation, prominent CTAs, and intuitive user flow
3. **Performance**: Optimized React components with smooth animations
4. **Mobile-First**: Fully responsive with touch-friendly interactions
5. **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation
6. **Maintainability**: Modular component structure with clear separation of concerns

## 📝 Technologies Used

- **React 18** - UI framework
- **React Router** - Client-side routing
- **CSS3** - Styling with modern features (Grid, Flexbox, CSS Variables)
- **HTML5** - Semantic markup
- **JavaScript ES6+** - Modern JavaScript features

## 🎯 Future Enhancements

- Add blog section
- Integrate with actual backend API
- Implement dark mode toggle
- Add more interactive dashboard visualizations
- Include case studies page
- Add animation library (Framer Motion)

## 📄 License

This is a redesign project for demonstration purposes.

## 🤝 Contributing

This is a candidate submission project. For any questions or feedback, please reach out.

---

Built with ❤️ for Ryze AI
