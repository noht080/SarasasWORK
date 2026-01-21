/**
 * MAIN PAGE COMPONENT (app/page.tsx)
 * 
 * WHAT IS THIS FILE?
 * - In Next.js App Router, this file defines the homepage (/)
 * - The file location determines the URL route
 * - app/page.tsx = the root "/" route
 * - app/about/page.tsx would be "/about" route
 * 
 * NEXT.JS FILE-BASED ROUTING:
 * - Next.js uses the folder structure to create routes automatically
 * - No need to manually configure routes (like in Express or React Router)
 * - Each folder becomes a route segment
 */

// IMPORT STATEMENTS
// - We're importing our custom components
// - TypeScript/JavaScript uses imports to share code between files
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import { Skill, Project } from "./types";

/**
 * DEFAULT EXPORT:
 * - Each page.tsx must have a default export
 * - This is the component that gets rendered for this route
 * - The function name can be anything, but "Home" or "Page" is common
 */
export default function Home() {
  /**
   * DATA ARRAYS:
   * - We're storing data in arrays
   * - These would typically come from a database or API
   * - For now, we're using hardcoded data (static data)
   * 
   * TYPESCRIPT INFERENCE:
   * - TypeScript automatically infers the type from the array
   * - We could also write: const skills: Skill[] = [...]
   */
  const skills: Skill[] = [
    {
      skill: "JavaScript",
      level: "Intermediate",
      description: "Building interactive web applications",
      icon: "📜",
    },
    {
      skill: "TypeScript",
      level: "Beginner",
      description: "Learning type-safe JavaScript",
      icon: "📘",
    },
    {
      skill: "React",
      level: "Intermediate",
      description: "Creating reusable UI components",
      icon: "⚛️",
    },
    {
      skill: "Next.js",
      level: "Beginner",
      description: "Building full-stack React applications",
      icon: "▲",
    },
    {
      skill: "Tailwind CSS",
      level: "Beginner",
      description: "Styling with utility-first CSS",
      icon: "💨",
    },
    {
      skill: "HTML & CSS",
      level: "Intermediate",
      description: "Building web page structure and styles",
      icon: "🎨",
    },
  ];

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description:
        "My first Next.js project! A responsive portfolio website showcasing my journey as a software engineering student.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "#",
    },
    {
      title: "To-Do List App",
      description:
        "A simple task management application to practice React state management and component composition.",
      technologies: ["React", "TypeScript", "CSS"],
      githubUrl: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A web application that displays weather information using external APIs. Learning async programming!",
      technologies: ["JavaScript", "HTML", "CSS", "API"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/**
       * JSX RETURN:
       * - React components return JSX (JavaScript XML)
       * - JSX looks like HTML but it's actually JavaScript
       * - You can embed JavaScript expressions using { }
       * - className instead of class (because class is reserved in JavaScript)
       */}
      
      {/* Navigation Component */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative min-h-screen overflow-hidden pt-40 pb-24 px-4 sm:px-6 lg:px-8 text-white"
        >
          {/**
           * HERO VIDEO BACKGROUND:
           * - We position the video absolutely so it fills the section
           * - The content stays readable using a dark overlay layer
           * - Replace /hero-coding.mp4 with your own looping video in /public
           */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="/hero-coding.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          <div className="relative z-10 container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {/**
               * RESPONSIVE TEXT:
               * - "text-5xl" = large text on mobile
               * - "md:text-6xl" = even larger on medium screens and up
               */}
              Software Engineering Student
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Building my future in code, one project at a time
            </p>
            <p className="text-lg mb-8 text-blue-50 max-w-2xl mx-auto">
              Welcome to my portfolio! I'm a passionate software engineering
              student exploring the world of web development, learning modern
              technologies, and building projects that solve real problems.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#projects"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/**
               * PROSE CLASS:
               * - Tailwind Typography plugin styles
               * - Makes long-form text look nice automatically
               */}
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                Hi! I'm a software engineering student preparing for university.
                My journey into programming started with curiosity about how
                websites and applications work, and it's grown into a passion
                for creating solutions through code.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                Currently, I'm learning:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Frontend development with React and Next.js</li>
                <li>TypeScript for type-safe programming</li>
                <li>Modern CSS with Tailwind CSS</li>
                <li>Software engineering principles and best practices</li>
                <li>Version control with Git and GitHub</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I believe in learning by doing, so I spend most of my time
                building projects, experimenting with new technologies, and
                contributing to open-source projects. Every line of code is a
                step forward in my journey!
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section
          id="skills"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Skills & Technologies
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Here are the technologies I'm currently learning and working with.
              Every day brings new opportunities to grow and improve!
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/**
               * GRID LAYOUT:
               * - "grid" = CSS Grid layout
               * - "grid-cols-1" = 1 column on mobile
               * - "md:grid-cols-2" = 2 columns on medium screens
               * - "lg:grid-cols-3" = 3 columns on large screens
               * - "gap-6" = spacing between grid items
               * 
               * MAPPING ARRAY TO COMPONENTS:
               * - We're using map() to create a SkillCard for each skill
               * - The key prop is required by React for list items
               * - The spread operator {...skill} passes all properties as props
               */}
              {skills.map((skill) => (
                <SkillCard key={skill.skill} {...skill} />
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              My Projects
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Check out some of the projects I've built while learning web
              development. Each project taught me something new!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
        >
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              I'm always interested in connecting with fellow developers,
              potential collaborators, or anyone who shares a passion for
              software engineering!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:your.email@example.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Email Me
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 dark:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
