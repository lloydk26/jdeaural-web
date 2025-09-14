# JDE Aural Architecture - React Application

A modern React application built with TypeScript and Tailwind CSS for JDE Aural Architecture's acoustical engineering services.

## 🚀 Features

- **React 19** with TypeScript for modern development
- **Vite** for fast development and optimized builds
- **React Router DOM** for client-side routing
- **Tailwind CSS** for utility-first styling
- **Radix UI** components for accessible UI elements
- **React Helmet Async** for SEO metadata management
- **Responsive design** with mobile-first approach
- **Smooth animations** and modern UI/UX

## 🛠️ Technology Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Declarative routing
- **React Helmet Async** - Document head management
- **Radix UI** - Accessible component library
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── ui/             # UI components (Button, Card, etc.)
│   ├── AnimatedSection.tsx
│   └── HeroCarousel.tsx
├── data/               # Static data and configurations
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── App.tsx            # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jdeaural-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🎨 Customization

### Styling
The application uses Tailwind CSS with custom design tokens defined in:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - CSS variables and base styles

### Colors and Theming
The color scheme is defined using CSS custom properties with support for light and dark modes.

### Components
UI components are built using Radix UI primitives for accessibility and styled with Tailwind CSS.

## 📱 Pages

- **Home** - Landing page with hero carousel and service overview
- **Services** - Detailed service listings with individual service pages
- **Portfolio** - Project showcase with individual project details
- **Products** - Product listings (placeholder)
- **About** - Company information and mission
- **Contact** - Contact information and inquiry form
- **Customer Feedback** - Client testimonials and reviews

## 🌟 Key Features

### Responsive Design
- Mobile-first approach with breakpoints for tablet and desktop
- Optimized layouts for all screen sizes
- Touch-friendly navigation

### Performance
- Vite for fast builds and hot module replacement
- Optimized images and assets
- Code splitting and lazy loading ready

### Accessibility
- Semantic HTML structure
- ARIA labels and proper focus management
- Keyboard navigation support
- Screen reader compatibility

### SEO
- Meta tags management with React Helmet
- Structured data ready
- Open Graph and Twitter Card support

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect your repository for automatic deployments
- **GitHub Pages** - Use GitHub Actions for deployment
- **AWS S3** - Upload to S3 bucket with CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📝 License

This project is private and proprietary to JDE Aural Architecture.