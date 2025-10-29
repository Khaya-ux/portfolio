import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import khaya from "../assets/khaya.jpg";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Khaya Dube
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300">
            Software Developer
          </h2>
          <p className="text-lg text-gray-400">
            Crafting beautiful, functional web experiences from South Africa 🇿🇦
          </p>
          <div className="flex gap-4 flex-wrap pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300 font-semibold transform hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 rounded-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 font-semibold"
            >
              Contact Me
            </button>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/Khaya-ux"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/khayalethu-dube-5577832b2/"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="kdube2912@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <img
                src={khaya}
                alt="Khaya Dube"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
