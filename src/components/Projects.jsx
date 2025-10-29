import React from "react";
import { Code, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Clock website",
      desc: "A sleek, responsive clock website displaying current time with customizable themes.",
      link: "#",
      tech: ["HTML", "Bootstrap", "JavaScript"],
    },
    {
      title: "Menu-Like Website Project",
      desc: "A Product Menu-Like Website Project that showcases various products with images and descriptions.",
      link: "#",
      tech: ["HTML", "CSS"],
    },
    {
      title: "Utility management app",
      desc: "A utility management app to track and manage household utilities efficiently.",
      link: "#",
      tech: ["React", "Tailwind CSS", "Firebase"],
    },
  ];

  return (
    <section id="projects" className="px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Code className="w-6 h-6" />
                </div>
                <a
                  href={project.link}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-purple-400" />
                </a>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
