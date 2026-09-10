import React, { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiSend, FiShare2, FiCheck } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/nirmalshital3@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Animated Glowing Ambient Orbs */}
      <div className="glow-orb orb-primary"></div>
      <div className="glow-orb orb-secondary"></div>

      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <h2>Contact Me</h2>
          <p>Got a question? Send me a message, and I'll get back to you soon.</p>
        </div>

        {/* Contact Form Card */}
        <div className="glass-card form-card">
          <div className="card-header">
            <div>
              <h3>Get in Touch</h3>
              <p>Have something to discuss? Send me a message and let's talk.</p>
            </div>
            <FiShare2 className="share-icon" />
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <FiUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <FiMail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <FiMessageSquare className="input-icon textarea-icon" />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn" disabled={status === 'sending'}>
              {status === 'sending' ? (
                'Sending...'
              ) : status === 'success' ? (
                <>Sent <FiCheck /></>
              ) : (
                <>Send Message <FiSend /></>
              )}
            </button>

            {status === 'success' && (
              <p className="form-status success">Thanks! Your message has been sent.</p>
            )}
            {status === 'error' && (
              <p className="form-status error">Something went wrong — please try again or email me directly.</p>
            )}
          </form>
        </div>

        {/* Connect With Me Card */}
        <div className="glass-card connect-card">
          <h3>Connect With Me</h3>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/shital-nirmal-454140289/" target="_blank" rel="noreferrer" className="social-item">
              <div className="social-icon linkedin"><FaLinkedin /></div>
              <div className="social-info">
                <h4>Let's Connect</h4>
                <p>on LinkedIn</p>
              </div>
            </a>

            <a href="https://leetcode.com/u/shital2023/" target="_blank" rel="noreferrer" className="social-item">
              <div className="social-icon leetcode"><SiLeetcode /></div>
              <div className="social-info">
                <h4>LeetCode</h4>
                <p>@shital2023</p>
              </div>
            </a>

            <a href="https://github.com/Shital-3/Shital-3" target="_blank" rel="noreferrer" className="social-item">
              <div className="social-icon github"><FaGithub /></div>
              <div className="social-info">
                <h4>Github</h4>
                <p>@Shital-3</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;