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
import AnimatedContent from "./AnimatedContent";
import BlurText from "./components/BlurText";
import GradientText from "./components/GradientText";
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
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950">
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
          className="relative min-h-screen overflow-hidden pt-36 pb-24 px-4 sm:px-6 lg:px-8 text-white"
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
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/80"
            aria-hidden="true"
          />
          <div className="relative z-10 container mx-auto max-w-5xl text-center">
            <AnimatedContent
              distance={60}
              direction="vertical"
              duration={0.7}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              delay={0}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
                Incoming Software Engineering Student
              </span>
            </AnimatedContent>
            {/**
             * RESPONSIVE TEXT:
             * - "text-5xl" = large text on mobile
             * - "md:text-6xl" = even larger on medium screens and up
             */}
            <AnimatedContent
              distance={40}
              direction="vertical"
              duration={0.7}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              delay={0.05}
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                <GradientText
                  colors={["#5227FF", "#FF9FFC", "#B19EEF", "#5227FF"]}
                  animationSpeed={8}
                  showBorder={false}
                >
                  Software Engineering Student
                </GradientText>
              </h1>
            </AnimatedContent>
            <BlurText
              text="Building my future in code, one project at a time"
              animateBy="words"
              direction="top"
              className="text-xl md:text-2xl mb-8 text-blue-100"
            />
            <BlurText
              text="Welcome to my portfolio! I'm a passionate software engineering student exploring the world of web development, learning modern technologies, and building projects that solve real problems."
              animateBy="words"
              direction="top"
              className="text-lg mb-8 text-blue-50 max-w-2xl mx-auto"
            />
            <div className="flex gap-4 justify-center flex-wrap">
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
                className="inline-block"
              >
                <a
                  href="/projects"
                  className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold shadow-lg shadow-black/20 ring-1 ring-white/40 hover:bg-white/90 transition-colors"
                >
                  View Projects
                </a>
              </AnimatedContent>
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.1}
                className="inline-block"
              >
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition-colors border border-white/20"
                >
                  Get In Touch
                </a>
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
        >
          <div className="container mx-auto max-w-6xl">
            <AnimatedContent
              distance={60}
              direction="vertical"
              duration={0.7}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
            >
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  About
                </p>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">
                  Building a strong foundation
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                  I’m learning by building real projects, practicing clean
                  code, and improving every day.
                </p>
              </div>
            </AnimatedContent>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <AnimatedContent
                distance={60}
                direction="vertical"
                duration={0.7}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
              >
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                    Hi! I’m a software engineering student preparing for
                    university. My journey into programming started with
                    curiosity about how websites and applications work, and
                    it’s grown into a passion for building helpful products.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                    I enjoy solving problems, learning modern tools, and
                    collaborating with other developers.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-0">
                    <li>Frontend development with React and Next.js</li>
                    <li>TypeScript for type-safe programming</li>
                    <li>Modern CSS with Tailwind CSS</li>
                    <li>Software engineering principles and best practices</li>
                    <li>Version control with Git and GitHub</li>
                  </ul>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={60}
                direction="vertical"
                duration={0.7}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                delay={0.1}
              >
                <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-slate-50 dark:bg-slate-950/40 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Highlights
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li>✅ Learning full-stack fundamentals</li>
                    <li>✅ Building a strong portfolio</li>
                    <li>✅ Open to internships & mentorship</li>
                    <li>✅ Focused on clean, readable code</li>
                  </ul>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section
          id="skills"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
        >
          <div className="container mx-auto max-w-6xl">
            <AnimatedContent
              distance={60}
              direction="vertical"
              duration={0.7}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
            >
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  Skills
                </p>
                <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">
                  Tools I use to build
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mt-4 mb-12 max-w-2xl mx-auto">
                  Here are the technologies I’m focused on right now, with
                  steady progress every week.
                </p>
              </div>
            </AnimatedContent>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <AnimatedContent
                  key={skill.skill}
                  distance={40}
                  direction="vertical"
                  duration={0.6}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  delay={index * 0.05}
                >
                  <SkillCard {...skill} />
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
        >
          <div className="container mx-auto max-w-6xl">
            <AnimatedContent
              distance={60}
              direction="vertical"
              duration={0.7}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
            >
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  Projects
                </p>
                <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">
                  Selected work
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mt-4 mb-12 max-w-2xl mx-auto">
                  Projects I built to practice real-world features, UI polish,
                  and clean code.
                </p>
              </div>
            </AnimatedContent>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedContent
                  key={project.title}
                  distance={40}
                  direction="vertical"
                  duration={0.6}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  delay={index * 0.05}
                >
                  <ProjectCard {...project} />
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 p-10 shadow-lg backdrop-blur">
              <AnimatedContent
                distance={60}
                direction="vertical"
                duration={0.7}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                    Contact
                  </p>
                  <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">
                    Let’s connect
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-4 mb-8 text-lg">
                    I’m always open to feedback, collaboration, and learning
                    opportunities.
                  </p>
                </div>
              </AnimatedContent>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
                className="inline-block"
              >
                <a
                  href="mailto:your.email@example.com"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Email Me
                </a>
              </AnimatedContent>
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.1}
                className="inline-block"
              >
                <a
                  href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
                  className="bg-gray-800 dark:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                >
                  GitHub
                </a>
              </AnimatedContent>
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.2}
                className="inline-block"
              >
                <a
                  href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
                  className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
          >
                  LinkedIn
          </a>
              </AnimatedContent>
            </div>
            </div>
        </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
