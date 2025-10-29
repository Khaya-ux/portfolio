import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A React & Tailwind portfolio site.",
    link: "#",
  },
  { title: "Task Manager App", desc: "Manage tasks efficiently.", link: "#" },
  { title: "E-commerce Store", desc: "Shop online with React.", link: "#" },
];

const Projects = () => {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-gray-100 text-center">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-transform hover:-translate-y-1 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.desc}</p>
            <a
              href={project.link}
              className="text-[#ff7e5f] font-semibold hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
