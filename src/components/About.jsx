import React from "react";
import { Code, Palette, Zap } from "lucide-react";

export default function About() {
  const skills = [
    { name: "React", icon: <Code className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <Palette className="w-6 h-6" /> },
    { name: "JavaScript", icon: <Zap className="w-6 h-6" /> },
  ];

  return (
    <section id="about" className="px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center mb-12">
          I'm a passionate software developer based in South Africa,
          specializing in building modern, responsive web applications. I love
          turning complex problems into simple, beautiful, and intuitive
          solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-200">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
