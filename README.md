# Software Engineering Student Portfolio Website

A beautiful, educational portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project is designed specifically for software engineering students to learn modern web development while building their portfolio.

## 🎓 Educational Focus

This project includes:
- **Detailed code comments** explaining every concept
- **TypeScript examples** showing type safety in action
- **Component architecture** demonstrating reusable UI patterns
- **Responsive design** with Tailwind CSS utilities
- **Learning guide** (`LEARNING_GUIDE.md`) covering all fundamentals

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to see your website!

### Other Available Commands

```bash
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check for code errors
```

## 📚 How to Learn from This Project

1. **Read the comments** - Every file has detailed explanations of:
   - What the code does
   - Why we're using specific patterns
   - How Next.js, TypeScript, and Tailwind work

2. **Start with the Learning Guide** - Check out `LEARNING_GUIDE.md` for comprehensive explanations of:
   - Next.js routing and components
   - TypeScript basics and type safety
   - Tailwind CSS utility classes
   - React concepts and patterns

3. **Experiment** - Try modifying:
   - Colors in Tailwind classes
   - Content in the data arrays
   - Component props and styles
   - Add new sections or components

4. **Follow the structure** - Notice how we organize:
   - Components in `app/components/`
   - Types in `app/types/`
   - Pages use file-based routing

## 🏗️ Project Structure

```
app/
├── components/          # Reusable React components
│   ├── Navbar.tsx      # Navigation with mobile menu
│   ├── Footer.tsx      # Site footer
│   ├── SkillCard.tsx   # Skill display component
│   └── ProjectCard.tsx # Project showcase component
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared interfaces and types
├── layout.tsx          # Root layout (wraps all pages)
├── page.tsx            # Homepage with all sections
└── globals.css         # Global styles and Tailwind
```

## 🎨 Technologies Used

- **Next.js 16** - React framework with file-based routing
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - UI library for building components

## 📖 Key Concepts Demonstrated

- ✅ **Next.js App Router** - File-based routing system
- ✅ **Server vs Client Components** - When to use each
- ✅ **TypeScript Interfaces** - Type definitions for props
- ✅ **Component Composition** - Building complex UIs from simple parts
- ✅ **Responsive Design** - Mobile-first with Tailwind breakpoints
- ✅ **State Management** - React hooks (useState)
- ✅ **Props and Data Flow** - Passing data between components
- ✅ **JSX Syntax** - Writing HTML-like code in JavaScript

## 🎯 What You'll Learn

By studying this codebase, you'll understand:

1. **Next.js fundamentals** - Pages, layouts, and routing
2. **TypeScript basics** - Types, interfaces, and type safety
3. **Tailwind CSS** - Utility classes and responsive design
4. **React patterns** - Components, props, and state
5. **Modern web development** - Best practices and conventions

## 📝 Customization Guide

### Change Colors

Edit Tailwind classes in components:
```tsx
// Change from blue to purple
className="bg-blue-600" → className="bg-purple-600"
```

### Add New Skills

Edit the `skills` array in `app/page.tsx`:
```typescript
const skills: Skill[] = [
  {
    skill: "Your Skill",
    level: "Intermediate",
    description: "Description here",
    icon: "🎯",
  },
  // ... more skills
];
```

### Add New Projects

Edit the `projects` array in `app/page.tsx`:
```typescript
const projects: Project[] = [
  {
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/...",
  },
];
```

## 🌐 Deploy Your Website

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

## 📚 Additional Resources

- **[Next.js Documentation](https://nextjs.org/docs)** - Comprehensive Next.js guide
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - TypeScript tutorials
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** - Utility class reference
- **[React Documentation](https://react.dev/)** - Learn React fundamentals
- **Check `LEARNING_GUIDE.md`** - Detailed explanations of all concepts!

## 🤝 Contributing

This is a learning project! Feel free to:
- Fork and customize for your portfolio
- Add features and experiment
- Share with other students learning web development

---

**Happy Learning!** 🎉 Start by reading the code comments and experimenting with the code. Every great developer started with their first portfolio website!
