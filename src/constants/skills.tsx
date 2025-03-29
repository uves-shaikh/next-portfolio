import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNeo4J,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export const skills = [
  {
    name: "Next.js",
    bgColor: "bg-gray-100",
    icon: <SiNextdotjs className="text-black" />,
  },
  {
    name: "Node.js",
    bgColor: "bg-green-100",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    name: "Express.js",
    bgColor: "bg-gray-100",
    icon: <SiExpress className="text-black" />,
  },
  {
    name: "TypeScript",
    bgColor: "bg-blue-100",
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    name: "TailwindCSS",
    bgColor: "bg-sky-100",
    icon: <SiTailwindcss className="text-sky-500" />,
  },
  {
    name: "Git",
    bgColor: "bg-orange-100",
    icon: <FaGitAlt className="text-orange-500" />,
  },
  {
    name: "MongoDB",
    bgColor: "bg-green-100",
    icon: <SiMongodb className="text-green-500" />,
  },
  {
    name: "PostgreSQL",
    bgColor: "bg-blue-100",
    icon: <SiPostgresql className="text-blue-500" />,
  },
  {
    name: "GraphQL",
    bgColor: "bg-pink-100",
    icon: <SiGraphql className="text-pink-500" />,
  },
  {
    name: "Prisma",
    bgColor: "bg-gray-100",
    icon: <SiPrisma className="text-black" />,
  },
  {
    name: "Neo4j",
    bgColor: "bg-green-100",
    icon: <SiNeo4J className="text-green-500" />,
  },
  {
    name: "Firebase",
    bgColor: "bg-yellow-100",
    icon: <SiFirebase className="text-yellow-500" />,
  },
];
