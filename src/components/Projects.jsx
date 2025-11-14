import React from "react";
import { ExternalLink, Github } from "lucide-react";
import salesSkillHubImg from "../assets/images/salesskill.png";
import kitchenCompanion from "../assets/images/kitchencompanion.jpg";
import SkillsSection from "./sections/SkillSection";
import Testimonials from "./sections/Testimonials";
import springmilez from "../assets/images/spring.jpg";
import listing from "../assets/images/listing.jpg";

const projects = [
  {
    id: 1,
    title: "Salesskillhub",
    description:
      "SalesSkillHub is a sales-focused platform showcasing ad copy, lead conversion strategies, and client engagement techniques.",
    link: "https://skill-sales-hub.vercel.app/",
    code: "https://github.com/yourusername/sales-skillhub",
    image: salesSkillHubImg,
    tech: ["React", "Tailwind", "Vercel"],
  },
  {
    id: 2,
    title: "Kitchen Companion",
    description:
      "A recipe browsing and meal-planning app built with React and Tailwind CSS. Includes search, favorites, and shopping list features for a seamless cooking experience.",
    link: "https://recipe-finder-zeta-eight.vercel.app/",
    code: "https://github.com/Gentlestan/recipe-finder",
    image: kitchenCompanion,
    tech: ["React", "Tailwind", "TheMealDB API"],
  },
  {
  id: 3,
  title: "Real Estate Listing App",
  description:
    "A modern property listing platform built with Next.js and TypeScript. Features dynamic routes, booking, and reviews, with data fetched from mock APIs. Designed for scalability, responsiveness, and real-world frontend workflows.",
  link: "https://alx-listing-app-deployed-ten-livid.vercel.app/",
  code: "https://github.com/Gentlestan/alx-listing-app-deployed",
  image: listing,
  tech: ["Next.js", "TypeScript", "Tailwind", "API Integration"],
},

  {
    id: 4,
    title: "Springmillez Solar",
    description:
      "A responsive business website built with React to showcase solar, CCTV, and electrical services. The site highlights company offerings, past projects, and contact options, with a clean professional design optimized for speed, SEO, and mobile accessibility.",
    link: "https://springmilez.vercel.app/",
    code: "https://github.com/yourusername/springmilez",
    image: springmilez,
    tech: ["React", "Tailwind", "SEO"],
  },
];

const Projects = () => {
  return (
    <section
      className="bg-slate-900 py-4 px-6 md:px-6 text-gray-50"
      id="projects"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
        Projects
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-600/40 hover:-translate-y-1 transition-all flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((stack, index) => (
                  <span
                    key={index}
                    className="bg-slate-700 text-slate-200 text-xs px-2 py-1 rounded-md"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                  View Project <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                  Code <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Closing CTA */}
      <div className="text-center mt-12 text-slate-300">
        <p>
          Want to see more? Explore my{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline font-semibold"
          >
            GitHub
          </a>{" "}
          for additional projects and experiments.
        </p>
      </div>

      <SkillsSection />
      <Testimonials />
    </section>
  );
};

export default Projects;
