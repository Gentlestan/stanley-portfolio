// SkillsSection.jsx
import { FaReact, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiPostman } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
  { name: "APIs", icon: <SiPostman className="text-orange-500 text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
];

const SkillsSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8">
      {skills.map((s, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center text-center w-24"
        >
          {s.icon}
          <span className="mt-2 text-slate-300 text-sm">{s.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
