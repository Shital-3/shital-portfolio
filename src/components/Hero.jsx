import React from 'react';
import { FiArrowUpRight, FiMail, FiDownload } from 'react-icons/fi';
import profilePhoto from '../assets/images/profile.jpg';
import './Hero.css';

const Hero = () => {
  const techBadges = ['React', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'];

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content fade-in-up">
          <div className="badge-pill">
            <span className="status-dot"></span>
            Open to Internships & Full-Time Roles
          </div>

          <h1 className="hero-title">
            Full Stack <br />
            <span className="gradient-text">Developer</span>
          </h1>

          <h2 className="hero-subtitle">
            Final-Year CS Student · Building Real-World Web Apps
          </h2>

          <p className="hero-description">
            I design and build full-stack applications end-to-end — from database
            schema to polished UI — with a focus on clean architecture and
            practical, production-ready code.
          </p>

          <div className="tech-pill-container">
            {techBadges.map((tech, index) => (
              <span key={index} className="tech-pill">{tech}</span>
            ))}
          </div>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">
              Projects <FiArrowUpRight />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact <FiMail />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
              Resume <FiDownload />
            </a>
          </div>
        </div>

        <div className="hero-illustration-wrapper fade-in-up">
          <div className="illustration-card photo-card">
            <div className="photo-glow"></div>
            <img src={profilePhoto} alt="Shital Nirmal" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;