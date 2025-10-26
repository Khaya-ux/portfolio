import React from "react";
import "./Hero.css";
import khaya from "../../assets/khaya.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Khaya Dube</span>
          </h1>
          <h2>Software Developer</h2>
          <p>Based in South Africa</p>
          <div className="cta-buttons">
            <button className="primary-btn">View Projects</button>
            <button className="secondary-btn">Contact Me</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={khaya} alt="Khaya Dube" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
