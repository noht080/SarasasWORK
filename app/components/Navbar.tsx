/**
 * Navbar Component
 * 
 * WHAT IS A COMPONENT IN REACT/NEXT.JS?
 * - Components are reusable pieces of UI
 * - They're functions that return JSX (JavaScript XML - looks like HTML but in JavaScript)
 * - Components can accept "props" (properties) as input
 * - This component can be imported and used anywhere in your app
 * 
 * WHY CREATE SEPARATE COMPONENT FILES?
 * - Code organization: keep related code together
 * - Reusability: use the same component in multiple places
 * - Maintainability: easier to find and fix bugs
 * 
 * TYPESCRIPT EXPLANATION:
 * - We're using a "named export" (export const Navbar = ...)
 * - TypeScript helps catch errors before running the code
 */

// In Next.js, components in the app directory are Server Components by default
// This means they run on the server, making them faster and more secure
"use client"; // This directive makes it a Client Component (runs in browser)

import { useState } from "react";

/**
 * TYPESCRIPT INTERFACE
 * - An interface defines the shape of an object
 * - It tells TypeScript what properties an object should have
 * - This helps catch errors: if you pass wrong props, TypeScript will warn you
 */
interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  /**
   * REACT HOOK: useState
   * - Hooks are special functions that let you "hook into" React features
   * - useState lets you add state (data that can change) to components
   * - isOpen is the current value, setIsOpen is the function to change it
   * - false is the initial value
   */
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80">
      {/**
       * TAILWIND CSS EXPLANATION:
       * - All these classes are Tailwind utility classes
       * - "fixed" = position: fixed (stays at top when scrolling)
       * - "top-0 left-0 right-0" = positions it at the top edge
       * - "z-50" = z-index (makes it appear above other content)
       * - "bg-white/80" = white background with 80% opacity
       * - "backdrop-blur-md" = blur effect behind the navbar
       * - "shadow-sm" = small shadow
       * - "dark:bg-gray-900/80" = dark mode background (only applies in dark mode)
       */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/**
         * TAILWIND RESPONSIVE DESIGN:
         * - "container" = max-width container
         * - "mx-auto" = margin horizontal auto (centers the container)
         * - "px-4 sm:px-6 lg:px-8" = padding that changes with screen size:
         *   - Default: 1rem (16px) padding
         *   - sm (640px+): 1.5rem padding
         *   - lg (1024px+): 2rem padding
         */}
        <div className="flex items-center justify-between h-16">
          {/**
           * FLEXBOX EXPLANATION:
           * - "flex" = display: flex (creates a flex container)
           * - "items-center" = align-items: center (vertical centering)
           * - "justify-between" = justify-content: space-between (space between items)
           * - "h-16" = height: 4rem (64px)
           */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              SE Portfolio
            </h1>
          </div>

          {/* Desktop Navigation - hidden on mobile, shown on medium screens and up */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/**
               * ARRAY.MAP() EXPLANATION:
               * - map() creates a new array by transforming each item
               * - Here, we're creating a link for each navigation item
               * - Each link needs a unique "key" prop (React requirement)
               */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {/**
               * CONDITIONAL RENDERING:
               * - {isOpen ? "✕" : "☰"} means:
               *   - If isOpen is true, show "✕"
               *   - If isOpen is false, show "☰"
               * - This is called a ternary operator: condition ? valueIfTrue : valueIfFalse
               */}
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
