# Modern Landing Page with Material-UI and Stitches

A performant, SEO-friendly landing page built with Next.js, Material-UI, and Stitches. Features a dark theme, responsive design, and optimized performance metrics.

## 🚀 Live Demo

[View Live Demo](https://cadex-assignment-ts.netlify.app)

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: Material-UI (MUI)
- **Styling**: Stitches (CSS-in-JS)
- **Language**: TypeScript
- **Deployment**: Netlify

## 🔧 Setup & Development

1. Clone the repository:
bash git clone [your-repo-url] cd [your-project-name]


2. Install dependencies:
bash npm install


3. Run development server:
bash npm run dev


4. Open [http://localhost:3000](http://localhost:3000)

## 📦 Production Deployment

### Netlify Deployment

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Configure environment variables:
env NEXT_PUBLIC_BASE_URL=your-production-url


## 🎨 Styling Strategy

### Hybrid Approach (MUI + Stitches)

- **Stitches**: Used for custom components and global styles
  - Tokens system for consistent theming
  - Performance-optimized CSS-in-JS
  - Zero-runtime styling where possible

- **Material-UI**:
  - Component-level styling
  - Theme customization
  - Responsive utilities

### Design System

- Consistent spacing scale
- Dark theme optimization
- Fluid typography
- Custom color palette
- Responsive breakpoints
- Animation utilities

## 🔍 SEO Optimization

- Next.js App Router metadata
- Schema.org structured data
- Semantic HTML
- Open Graph tags
- Twitter Cards
- Sitemap generation
- Robots.txt configuration

## 🚀 Performance Optimizations

- Server-side rendering
- Image optimization
- Font optimization
- Code splitting
- Dynamic imports
- Lazy loading
- Bundle size optimization

## 🧪 Assumptions & Decisions

### Design Decisions
- Dark theme by default
- Mobile-first approach
- Single-page landing design
- Minimalist UI/UX

### Technical Decisions
- App Router over Pages Router
- Stitches for custom styling
- MUI for complex components
- TypeScript for type safety

### Performance Targets
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s

## 📝 Development Notes

### Component Structure
src/ ├── app/ # Next.js app router ├── components/ # Reusable components ├── config/ # Configuration files └── styles/ # Global styles & theme


### Key Features
- Responsive hero section
- Contact form with validation
- Animated transitions
- Accessible components
- Performance monitoring
- SEO optimization