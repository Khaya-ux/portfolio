import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            KD
          </div>

          <ul className="hidden md:flex gap-8 items-center">
            <li
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-purple-400 transition-colors"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-purple-400 transition-colors"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer hover:text-purple-400 transition-colors"
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:text-purple-400 transition-colors"
            >
              Contact
            </li>
          </ul>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300 font-semibold"
          >
            Let's Talk
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            <li
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-purple-400 transition-colors"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-purple-400 transition-colors"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer hover:text-purple-400 transition-colors"
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:text-purple-400 transition-colors"
            >
              Contact
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
