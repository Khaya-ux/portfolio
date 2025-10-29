import React from "react";
import khaya from "../assets/khaya.jpg";

const Hero = () => {
  return (
    <section className="min-h-[90vh] bg-[#1a1a1a] flex items-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div className="text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#ff7e5f] to-[#bd14a3] bg-clip-text text-transparent">
              Khaya Dube
            </span>
          </h1>
          <h2 className="text-2xl text-gray-400 mb-4">Software Developer</h2>
          <p className="text-lg text-gray-400 mb-8">Based in South Africa</p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#ff7e5f] to-[#bd14a3] transition-transform hover:-translate-y-1">
              View Projects
            </button>
            <button className="px-6 py-3 rounded-full font-semibold border-2 border-[#ff7e5f] text-[#ff7e5f] transition-transform hover:-translate-y-1">
              Contact Me
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center order-first md:order-none">
          <img
            src={khaya}
            alt="Khaya Dube"
            className="w-full max-w-[400px] h-[400px] md:h-[400px] rounded-2xl shadow-[0_0_20px_rgba(255,126,95,0.2)] object-cover object-center md:mt-0 mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
