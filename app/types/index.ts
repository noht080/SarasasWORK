/**
 * TypeScript Type Definitions
 * 
 * WHAT IS A TYPE DEFINITION FILE?
 * - This file contains reusable TypeScript types/interfaces
 * - Types define the shape/structure of data
 * - You can import these types anywhere in your app
 * - This helps catch errors and provides better autocomplete
 * 
 * WHY USE TYPE DEFINITIONS?
 * - Type Safety: Catch bugs before runtime
 * - Documentation: Types serve as inline documentation
 * - Better IDE Support: Autocomplete and error checking
 * - Refactoring: Easier to change code with confidence
 */

/**
 * INTERFACE vs TYPE:
 * - Interfaces are for object shapes (can be extended)
 * - Types can be interfaces, unions, primitives, etc.
 * - For simple object shapes, either works
 */

export interface Skill {
  skill: string;
  level: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface NavItem {
  name: string;
  href: string;
}

/**
 * TYPE WITH UNION:
 * - This type can only be one of these specific strings
 * - Prevents typos and invalid values
 */
export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";
