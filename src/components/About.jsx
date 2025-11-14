import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profileImg from "../assets/images/profile-img.jpg"; // your photo
import Testimonials from "./sections/Testimonials";
//import motion from "framer-motion";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-slate-100">
      {/* Top Section with Photo + CTA */}
      <div className="flex flex-col items-center text-center mb-16">
        <img
          src={profileImg}
          alt="Onyebuchi profile"
          className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg border-2 border-emerald-400"
        />
        <h1 className="text-3xl font-bold text-emerald-400">Onyebuchi Ohazulike</h1>
        <p className="text-slate-400 mt-2">
          Frontend Developer | Building clean, impactful digital solutions
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="/Stanley-Resume.pdf"
            target="_blank"
             rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-md"
          >
            <FileText size={18} /> Resume
          </a>
          <a
            href="mailto:sohazulike@gmail.com"
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg shadow-md"
          >
            <Mail size={18} /> Contact
          </a>
          <a
            href="https://github.com/Gentlestan"
            target="_blank"
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg shadow-md"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ohazulike-stanley/"
            target="_blank"
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg shadow-md"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>

      {/* Tech Career */}
      <div className="bg-slate-800 shadow-lg rounded-xl p-6 mb-12 border border-slate-700">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 text-center">
          Tech Career
        </h2>
        <div className="space-y-6 text-slate-300 text-base leading-relaxed text-center md:text-left">
          <p>
            In 2023, I started my frontend journey with{" "}
            <span className="font-semibold text-indigo-400">
              Scrimba’s Frontend Developer Career Path
            </span>
            , completing the program and furthering my skills through the{" "}
            <span className="font-semibold text-indigo-400">ALX Frontend Program</span>.
            I am now advancing my backend development skills through ALX’s backend course.
          </p>
          <p>
            I have built projects for brands, including{" "}
            <a
              href="https://saleskillhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold hover:underline"
            >
              SalesSkillHub.com
            </a>
            , as well as multiple personal web applications. I’m now ready to
            bring my skills and passion into a professional environment where I
            can contribute, grow, and create impactful digital solutions.
          </p>
        </div>
      </div>

      {/* Highlights */}
      <div className="bg-slate-800 shadow-lg rounded-xl p-6 mb-12 border border-slate-700">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400 text-center">
          Highlights
        </h2>
        <ul className="space-y-3 text-slate-300 text-base">
          {[
            "Graduated from ALX and Scrimba frontend programs.",
            "Currently advancing backend development through ALX.",
            "Built and deployed multiple responsive web apps.",
            "Integrated APIs for dynamic and data-driven experiences.",
            "Managed and delivered solar/CCTV projects end-to-end."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications */}
      <div className="bg-slate-800 shadow-lg rounded-xl p-6 mb-12 border border-slate-700">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 text-center">
          Certifications
        </h2>
        <ul className="space-y-3 text-slate-300 text-base">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 mt-1">▹</span>
            <span>
              <strong>ALX</strong> – Professional Development Course
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 mt-1">▹</span>
            <span>
              <strong>ALX Africa</strong> – Fronten Development Program
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 mt-1">▹</span>
            <span>
              <strong>Scrimba</strong> – Frontend Developer Career Path
            </span>
          </li>
        </ul>
      </div>

      {/* Core Values */}
      <div className="bg-slate-800 shadow-lg rounded-xl p-6 mb-12 border border-slate-700">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 text-center">
          Core Values
        </h2>
        <p className="text-slate-300 text-base leading-relaxed text-center md:text-left">
          I’m passionate about solving real-world problems with clean, user-friendly
          code. My values are rooted in continuous learning, collaboration, and
          creating solutions that empower people and businesses.
        </p>
      </div>

      {/* Soft Skills */}
      <div className="bg-slate-800 shadow-lg rounded-xl p-6 mb-12 border border-slate-700">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 text-center">
          Beyond Tech
        </h2>
        <ul className="space-y-3 text-slate-300 text-base">
          {[
            "Strong teamwork and collaboration",
            "Adaptability in fast-paced environments",
            "Creative problem-solving",
            "Effective communication across teams"
          ].map((skill, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">▹</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Fun Personal Section */}
      <div className="bg-slate-800 shadow-lg rounded-xl p-6 mt-16 border border-slate-700">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 text-center">
          Beyond Code
        </h2>
        <p className="text-slate-300 text-base leading-relaxed text-center md:text-left">
          When I’m not coding, I love exploring new tech ideas, reading about renewable
          energy, and hiking outdoors. I’m also passionate about tinkering with solar
          systems and finding innovative ways to bring technology into everyday life.
        </p>
      </div>
    </section>
  );
};

export default About;
