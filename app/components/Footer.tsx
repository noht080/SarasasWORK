/**
 * Footer Component
 * 
 * WHY SEPARATE COMPONENTS?
 * - Even simple components benefit from separation
 * - Makes your main page.tsx cleaner and easier to read
 * - Can be reused across different pages
 * 
 * TYPESCRIPT:
 * - This component doesn't take any props, so no TypeScript interface needed
 * - It's a simple functional component
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-12 mt-20 border-t border-white/10">
      {/**
       * TAILWIND EXPLANATION:
       * - "bg-gray-900" = background color (dark gray)
       * - "text-white" = white text color
       * - "py-8" = padding vertical (top and bottom) of 2rem
       * - "mt-20" = margin top of 5rem (spaces it from content above)
       */}
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {currentYear} Software Engineering Student Portfolio. Built with
          Next.js, TypeScript, and Tailwind CSS
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Learning web development one component at a time!
        </p>
      </div>
    </footer>
  );
}
