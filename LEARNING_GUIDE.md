# 📚 Learning Guide: Next.js, TypeScript & Tailwind CSS

Welcome! This guide explains the core concepts used in this portfolio website.

## 🎯 Table of Contents

1. [Next.js Basics](#nextjs-basics)
2. [TypeScript Basics](#typescript-basics)
3. [Tailwind CSS Basics](#tailwind-css-basics)
4. [React Concepts](#react-concepts)
5. [Project Structure](#project-structure)

---

## 🚀 Next.js Basics

### What is Next.js?

Next.js is a React framework that makes building web applications easier. It provides:

- **File-based routing**: Create routes by adding files/folders
- **Server-side rendering**: Pages can render on the server for better SEO
- **API routes**: Build backend endpoints in the same project
- **Automatic code splitting**: Only loads code needed for each page
- **Image optimization**: Automatically optimizes images

### Key Next.js Concepts

#### 1. File-based Routing

```
app/
  page.tsx          → https://yoursite.com/
  about/
    page.tsx        → https://yoursite.com/about
  blog/
    page.tsx        → https://yoursite.com/blog
```

The file location determines the URL route automatically!

#### 2. Server vs Client Components

**Server Components (Default):**
- Run on the server
- Can't use browser APIs (like `useState`, `onClick`)
- Better performance
- Perfect for static content

**Client Components:**
- Run in the browser
- Can use React hooks and browser APIs
- Need `"use client"` directive at the top

```typescript
// Server Component (default)
export default function Page() {
  return <div>Hello</div>;
}

// Client Component
"use client";
export default function Page() {
  const [count, setCount] = useState(0);
  return <div onClick={() => setCount(count + 1)}>{count}</div>;
}
```

#### 3. Layouts

Layouts wrap pages and provide shared UI:

```typescript
// app/layout.tsx wraps ALL pages
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />  {/* Shows on every page */}
        {children}  {/* The page content */}
        <Footer />  {/* Shows on every page */}
      </body>
    </html>
  );
}
```

---

## 📘 TypeScript Basics

### What is TypeScript?

TypeScript is JavaScript with types. It helps catch errors before running your code.

### Key TypeScript Concepts

#### 1. Basic Types

```typescript
// Primitive types
let name: string = "John";
let age: number = 25;
let isStudent: boolean = true;

// Arrays
let skills: string[] = ["React", "TypeScript"];
let numbers: number[] = [1, 2, 3];
```

#### 2. Interfaces

Interfaces define the shape of objects:

```typescript
// Define the shape
interface Person {
  name: string;
  age: number;
  email?: string;  // ? means optional
}

// Use it
const student: Person = {
  name: "Alice",
  age: 20,
  // email is optional, so we can omit it
};
```

#### 3. Type Annotations in Functions

```typescript
// Function parameters and return type
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Arrow function with types
const add = (a: number, b: number): number => {
  return a + b;
};
```

#### 4. Props Types in Components

```typescript
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

function Button({ text, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
```

#### 5. Type Inference

TypeScript can often guess types automatically:

```typescript
// TypeScript knows this is a string
let message = "Hello";

// TypeScript knows this is number[]
let numbers = [1, 2, 3];
```

---

## 🎨 Tailwind CSS Basics

### What is Tailwind CSS?

Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you use pre-built utility classes.

### Key Tailwind Concepts

#### 1. Utility Classes

Instead of:
```css
/* custom.css */
.card {
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
```

You write:
```html
<div class="p-4 bg-white rounded-lg shadow-md">
  Card content
</div>
```

#### 2. Spacing Scale

Tailwind uses a consistent spacing scale:

- `p-4` = padding: 1rem (16px)
- `p-8` = padding: 2rem (32px)
- `m-2` = margin: 0.5rem (8px)
- `gap-6` = gap: 1.5rem (24px)

Direction modifiers:
- `p-4` = all sides
- `px-4` = left & right
- `py-4` = top & bottom
- `pt-4` = top only

#### 3. Responsive Design

Tailwind uses breakpoints:

```html
<!-- Small on mobile, large on desktop -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  Responsive Heading
</h1>

<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col md:flex-row">
  <!-- content -->
</div>
```

Breakpoints:
- `sm:` = 640px+
- `md:` = 768px+
- `lg:` = 1024px+
- `xl:` = 1280px+

#### 4. Common Utilities

**Layout:**
- `flex` = display: flex
- `grid` = display: grid
- `hidden` = display: none
- `block` = display: block

**Flexbox:**
- `items-center` = align-items: center
- `justify-between` = justify-content: space-between
- `flex-col` = flex-direction: column

**Colors:**
- `bg-blue-500` = background color
- `text-gray-900` = text color
- `border-red-300` = border color

**Dark Mode:**
- `dark:bg-gray-800` = applies in dark mode
- `dark:text-white` = white text in dark mode

#### 5. Hover and Transitions

```html
<button class="bg-blue-500 hover:bg-blue-700 transition-colors">
  Hover me
</button>
```

---

## ⚛️ React Concepts

### 1. Components

Components are reusable pieces of UI:

```typescript
// Define component
function Welcome({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}

// Use component
<Welcome name="Alice" />
```

### 2. JSX

JSX looks like HTML but it's JavaScript:

```typescript
// This is JSX
const element = <h1>Hello, World!</h1>;

// It compiles to this JavaScript
const element = React.createElement('h1', null, 'Hello, World!');
```

**Important JSX Rules:**
- Use `className` instead of `class`
- Use `htmlFor` instead of `for`
- Must return a single parent element (or use fragments: `<>...</>`)

### 3. Props

Props pass data from parent to child:

```typescript
// Parent component
function App() {
  return <Card title="My Card" description="Card content" />;
}

// Child component
function Card({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
```

### 4. State with useState

State lets components remember data:

```typescript
"use client"; // Required for useState

import { useState } from "react";

function Counter() {
  // count is the value, setCount is the function to update it
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 5. Rendering Lists

Use `.map()` to render arrays:

```typescript
const items = ["Apple", "Banana", "Cherry"];

function List() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

**Important:** Always provide a unique `key` prop when rendering lists!

### 6. Conditional Rendering

```typescript
function Greeting({ isLoggedIn }: { isLoggedIn: boolean }) {
  // Using ternary operator
  return <div>{isLoggedIn ? "Welcome back!" : "Please log in"}</div>;
  
  // Using && operator
  return <div>{isLoggedIn && <p>Welcome back!</p>}</div>;
}
```

---

## 📁 Project Structure

```
firstreactproject/
├── app/                    # Next.js app directory
│   ├── components/         # Reusable React components
│   │   ├── Navbar.tsx     # Navigation component
│   │   ├── Footer.tsx     # Footer component
│   │   ├── SkillCard.tsx  # Skill display card
│   │   └── ProjectCard.tsx # Project display card
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts       # Shared types
│   ├── layout.tsx         # Root layout (wraps all pages)
│   ├── page.tsx           # Homepage component
│   └── globals.css        # Global styles
├── public/                # Static files (images, icons)
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── tailwind.config.ts     # Tailwind CSS configuration
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Types**: camelCase (e.g., `index.ts`)
- **Pages**: Always `page.tsx` in Next.js App Router

---

## 🎓 Common Patterns in This Project

### Pattern 1: Component with Props

```typescript
// Define interface
interface CardProps {
  title: string;
  content: string;
}

// Component using props
function Card({ title, content }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
```

### Pattern 2: Mapping Data to Components

```typescript
const projects = [
  { title: "Project 1", description: "..." },
  { title: "Project 2", description: "..." },
];

// In JSX
{projects.map((project) => (
  <ProjectCard key={project.title} {...project} />
))}
```

### Pattern 3: Conditional Classes

```typescript
const isActive = true;

<div className={`base-class ${isActive ? 'active-class' : ''}`}>
  Content
</div>
```

### Pattern 4: Responsive Layout

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Content adapts to screen size */}
</div>
```

---

## 🚀 Running the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Visit `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

## 💡 Tips for Learning

1. **Read the code comments** - Every file has detailed explanations
2. **Experiment** - Change values and see what happens
3. **Break things** - Learn by making mistakes
4. **Check the console** - Browser DevTools show errors and warnings
5. **Use TypeScript errors** - They're helpful guides, not enemies!

---

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

---

Happy coding! 🎉
