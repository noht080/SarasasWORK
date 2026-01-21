/**
 * SkillCard Component
 * 
 * PROPS IN REACT:
 * - Props are how you pass data to components
 * - Think of props as function parameters, but for components
 * - Props flow DOWN from parent to child (one-way data flow)
 * 
 * TYPESCRIPT INTERFACE:
 * - This interface defines what props this component expects
 * - It ensures type safety - TypeScript will error if you pass wrong types
 */
interface SkillCardProps {
  skill: string;
  level: string;
  description: string;
  icon: string;
}

/**
 * FUNCTION COMPONENT:
 * - This is a function that returns JSX
 * - The props are destructured: { skill, level, description, icon }
 * - Destructuring extracts values from objects/arrays
 * - Instead of props.skill, we can just use skill
 */
export default function SkillCard({
  skill,
  level,
  description,
  icon,
}: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {/**
       * COMPONENT REUSABILITY:
       * - This same component can display any skill
       * - Just pass different props and it displays different content
       * - This is the power of React components!
       */}
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {skill}
      </h3>
      <div className="flex items-center mb-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Level: {level}
        </span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
    </div>
  );
}
