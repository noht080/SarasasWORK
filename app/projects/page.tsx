import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types";

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my journey as a software engineering student.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "#",
    },
    {
      title: "To-Do List App",
      description:
        "A task management application to practice React state and component composition.",
      technologies: ["React", "TypeScript", "CSS"],
      githubUrl: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A web app that displays weather information using an external API.",
      technologies: ["JavaScript", "HTML", "CSS", "API"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-10">
            A few projects I built while learning web development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
