import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiGraphql,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiRedis
} from 'react-icons/si';

export const technologies = [
  { 
    name: "React", 
    icon: <FaReact className="w-8 h-8" />, 
    color: "text-[#61DAFB]" // React blue
  },
  { 
    name: "TypeScript", 
    icon: <SiTypescript className="w-8 h-8" />, 
    color: "text-[#3178C6]" // TypeScript blue
  },
  { 
    name: "Node.js", 
    icon: <FaNodeJs className="w-8 h-8" />, 
    color: "text-[#339933]" // Node.js green
  },
  { 
    name: "Next.js", 
    icon: <SiNextdotjs className="w-8 h-8" />, 
    color: "text-white" // Next.js white
  },
  { 
    name: "Python", 
    icon: <FaPython className="w-8 h-8" />, 
    color: "text-[#3776AB]" // Python blue
  },
  { 
    name: "AWS", 
    icon: <FaAws className="w-8 h-8" />, 
    color: "text-[#FF9900]" // AWS orange
  },
  { 
    name: "Docker", 
    icon: <FaDocker className="w-8 h-8" />, 
    color: "text-[#2496ED]" // Docker blue
  },
  { 
    name: "GraphQL", 
    icon: <SiGraphql className="w-8 h-8" />, 
    color: "text-[#E10098]" // GraphQL pink
  },
  { 
    name: "Tailwind", 
    icon: <SiTailwindcss className="w-8 h-8" />, 
    color: "text-[#06B6D4]" // Tailwind cyan
  },
  { 
    name: "MongoDB", 
    icon: <SiMongodb className="w-8 h-8" />, 
    color: "text-[#47A248]" // MongoDB green
  },
  { 
    name: "PostgreSQL", 
    icon: <SiPostgresql className="w-8 h-8" />, 
    color: "text-[#4169E1]" // PostgreSQL blue
  },
  { 
    name: "Redis", 
    icon: <SiRedis className="w-8 h-8" />, 
    color: "text-[#DC382D]" // Redis red
  },
]; 