import React, { useState, useEffect } from 'react';
import {
  FiCode,
  FiAward,
  FiLayers,
  FiExternalLink,
  FiEye,
  FiX
} from 'react-icons/fi';

import { projectsData } from '../data/projects';
import { certificatesData } from '../data/certificates';
import { skillCategories } from '../data/skills';

import './PortfolioShowcase.css';

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedCert, setSelectedCert] = useState(null);

  // Flatten all skills into a single array for the unified grid view
  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  // Close on Escape key and lock background scroll while modal is open
  useEffect(() => {
    if (!selectedCert) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Prevent background scrolling while certificate modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">

        {/* ================================
            SECTION TITLE
        ================================= */}
        <div className="section-title-container fade-in-up">
          <h2 className="section-title">
            Portfolio <span className="gradient-text">Showcase</span>
          </h2>

          <p className="section-subtitle">
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>

        {/* ================================
            TABS
        ================================= */}
        <div className="tabs-container">

          <button
            className={`tab-btn ${
              activeTab === 'projects' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('projects')}
          >
            <FiCode />
            Projects
          </button>

          <button
            className={`tab-btn ${
              activeTab === 'certificates' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('certificates')}
          >
            <FiAward />
            Award Certificates
          </button>

          <button
            className={`tab-btn ${
              activeTab === 'tech' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('tech')}
          >
            <FiLayers />
            Tech Stack
          </button>

        </div>

        {/* =====================================================
            PROJECTS TAB
        ====================================================== */}
        {activeTab === 'projects' && (
          <div className="tab-panel fade-in-up">

            <div className="projects-marquee-wrapper">

              <div className="projects-marquee-track">

                {/* Duplicate data is intentionally kept
                    for the existing infinite marquee effect */}
                {[...projectsData, ...projectsData].map(
                  (project, idx) => (
                    <div
                      key={`${project.id}-${idx}`}
                      className="project-card"
                    >

                      {/* ================================
                          PROJECT IMAGE
                      ================================= */}
                      <div className="project-image-container">

                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                        />

                      </div>

                      {/* ================================
                          PROJECT CONTENT
                      ================================= */}
                      <div className="project-content">

                        <h3 className="project-title">
                          {project.title}
                        </h3>

                        <p className="project-description">
                          {project.description}
                        </p>

                        {/* PROJECT TAGS */}
                        <div className="project-tags">

                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="project-tag"
                            >
                              {tag}
                            </span>
                          ))}

                        </div>

                        {/* PROJECT ACTIONS */}
                        <div className="project-actions">

                          {project.liveDemo ? (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noreferrer"
                              className="action-link primary"
                            >
                              Live Demo
                              <FiExternalLink />
                            </a>
                          ) : (
                            <span className="action-link disabled">
                              Coming Soon
                            </span>
                          )}

                          {project.github ? (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="action-link secondary"
                            >
                              Details →
                            </a>
                          ) : (
                            <span className="action-link disabled">
                              —
                            </span>
                          )}

                        </div>

                      </div>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>
        )}

        {/* =====================================================
            CERTIFICATES TAB
        ====================================================== */}
        {activeTab === 'certificates' && (
          <div className="tab-panel fade-in-up">

            <div className="certificates-grid">

              {certificatesData.map((cert) => (
                <div
                  key={cert.id}
                  className="cert-card"
                >

                  {/* CERTIFICATE IMAGE */}
                  <div className="cert-image-container">

                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                    />

                  </div>

                  {/* CERTIFICATE CONTENT */}
                  <div className="cert-content">

                    <h3 className="cert-title">
                      {cert.title}
                    </h3>

                    <p className="cert-issuer">
                      {cert.issuer} • {cert.date}
                    </p>

                    <button
                      type="button"
                      className="btn-secondary cert-btn"
                      onClick={() => setSelectedCert(cert)}
                    >
                      View Certificate
                      <FiEye />
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </div>
        )}

        {/* =====================================================
            TECH STACK TAB
        ====================================================== */}
        {activeTab === 'tech' && (
          <div className="tab-panel fade-in-up tech-wrapper">

            <div className="tech-center-glow"></div>

            <div className="tech-grid">

              {allSkills.map((skill, sIdx) => {

                const Icon = skill.icon;

                return (
                  <div
                    key={sIdx}
                    className="tech-square-card"
                  >

                    <div className="tech-icon-container">

                      <Icon
                        className="tech-card-icon"
                        style={{
                          color: skill.color
                        }}
                      />

                    </div>

                    <span className="tech-card-label">
                      {skill.name}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>
        )}

      </div>

      {/* =====================================================
          CERTIFICATE MODAL
      ====================================================== */}
      {selectedCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setSelectedCert(null)}
        >

          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="cert-modal-close"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate"
            >
              <FiX />
            </button>

            {/* CERTIFICATE IMAGE */}
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="cert-modal-image"
            />

            {/* CERTIFICATE INFORMATION */}
            <div className="cert-modal-info">

              <h3>
                {selectedCert.title}
              </h3>

              <p>
                {selectedCert.issuer} • {selectedCert.date}
              </p>

              <button
                type="button"
                className="cert-modal-back-btn"
                onClick={() => setSelectedCert(null)}
              >
                ← Back to Certificates
              </button>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default PortfolioShowcase;