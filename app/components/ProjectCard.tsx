/**
 * ProjectCard Component
 * 
 * COMPONENT PROPS WITH TYPESCRIPT:
 * - Notice how we define the shape of our props with an interface
 * - This gives us autocomplete in editors and catches errors early
 */

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string; // The ? means this prop is optional
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/**
       * TAILWIND TRANSFORMATIONS:
       * - "transform" enables CSS transforms
       * - "hover:-translate-y-1" = on hover, move up slightly
       * - This creates a nice interactive effect
       */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

      {/* Technologies Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {/**
         * ARRAY.MAP() AGAIN:
         * - We're mapping over the technologies array
         * - Each technology becomes a styled badge
         */}
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View Code →
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 dark:text-green-400 hover:underline font-medium"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}
