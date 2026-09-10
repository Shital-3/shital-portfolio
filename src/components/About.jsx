import React from 'react';
import { FiFileText, FiCode } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container fade-in-up">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="about-content">
          <p>
            Hello, I'm <strong className="highlight">Shital Nirmal</strong>, a passionate Full Stack Developer focused on building modern, scalable, and user-friendly web applications.
          </p>
          <p>
            I enjoy working with Java, JavaScript, React.js, Node.js, Express.js, REST APIs, and MySQL. I continuously improve my skills by building real-world projects and solving Data Structures and Algorithms problems.
          </p>
        </div>

        <div className="about-buttons">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-primary">
            <FiFileText /> Download CV
          </a>
          <a href="#portfolio" className="btn-secondary">
            <FiCode /> View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;