import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiGlobe, FiYoutube } from 'react-icons/fi';
import './Footer.css'; // Importing custom CSS file

const socialLinks = [
  { id: 1, icon: <FiGlobe />, url: 'https://www.gooogle.com/' },
  { id: 2, icon: <FiGithub />, url: 'https://github.com/' },
  { id: 3, icon: <FiTwitter />, url: 'https://twitter.com/' },
  { id: 4, icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/' },
  { id: 5, icon: <FiYoutube />, url: 'https://www.youtube.com/c/' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section copyright">
        <p>&copy; 2024 EduFlex. All Rights Reserved.</p>
      </div>
      <div className="footer-section links">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer-section social-icons">
        <ul>
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
