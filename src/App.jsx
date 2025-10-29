import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#1a1a1a] text-white font-sans">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="text-center text-gray-400 py-6">
        © 2025 Khaya Dube. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
