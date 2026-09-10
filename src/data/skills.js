import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiTypescript, SiDocker, SiMysql, SiPrisma, SiLeetcode 
} from "react-icons/si";
import { TbKey } from "react-icons/tb";

export const skillCategories = [
  {
    title: "Frontend & Backend",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#E44D26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
      // not on resume — keep only if actually used
      { name: "Express JS", icon: SiExpress, color: "#FFFFFF" },
      { name: "Node JS", icon: FaNodeJs, color: "#339933" },
      { name: "React + Native", icon: FaReact, color: "#61DAFB" }, // resume only lists React.js, not React Native

      { name: "JWT", icon: TbKey, color: "#D632EC" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" }, // added — on resume, was missing

      { name: "Git", icon: FaGitAlt, color: "#F05032" }, // added — on resume, was missing
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" }, // added — on resume, was missing

      { name: "Python", icon: FaPython, color: "#3776AB" }, // added per your request — not listed on resume, double-check
      { name: "DSA", icon: SiLeetcode, color: "#FFA116" }, // added — used LeetCode icon since there's no generic "DSA" glyph
    ],
  },
];