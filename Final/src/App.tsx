import { useState } from 'react';
import { Instagram, Mail, Heart, Star, Flower2, Sparkles } from 'lucide-react';
import './App.css'

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(() => null);

  const projects = [
    { title: "Capstone Project", type: "1Band Width the App", size: "large" },
    { title: "Task Managing App", type: "A notes app made in my front end web development class", size: "small" },
    { title: "Denver Zoo Website Redesign", type: "Redesigned the Denver Zoo website", size: "medium" },
    { title: "Fish Tank", type: "A silly game made in Game Development", size: "medium" },
    { title: "Project 5", type: "5", size: "small" },
    { title: "Project 6", type: "6", size: "large" }
  ];

  return (
    <div className="portfolio">
      <div className="decorative-blob blob-1"></div>
      <div className="decorative-blob blob-2"></div>

      <nav className="nav">
        <div className="nav-logo">
          <div className="logo-circle">
            <Heart className="logo-icon" fill="currentColor" />
          </div>
          <span className="logo-text">PV</span>
        </div>
        <div className="nav-links">
          <a href="#work" className="nav-link">Work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-button">Say hello</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-star">
              <Star className="star-icon" fill="currentColor" />
            </div>
            <h1 className="hero-title">
              Piper
              <br />
              <span className="hero-title-italic">Vetowich</span>
              <br />
            </h1>
            <div className="hero-subtitle-wrapper">
              <div className="hero-line"></div>
              <p className="hero-subtitle">
                Bringing ideas to life
              </p>
            </div>
            <div className="hero-badge-wrapper">
              <div className="hero-badge-bg"></div>
              <div className="hero-badge">
                <p className="hero-badge-text"> Engineering Student at CU Boulder </p>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <div className="hero-image-bg"></div>
              <div className="hero-image"></div>
              <div className="hero-flower">
                <Flower2 className="flower-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="line-wrapper">
      </div>

      <section id="work" className="projects">
        <div className="projects-header">
          <Sparkles className="projects-icon" />
          <h2 className="projects-title">
            Things I've <span className="projects-title-italic">Created</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card project-${project.size}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`project-inner project-style-${index % 3} ${hoveredIndex === index ? 'hovered' : ''}`}>
                <div className={`project-image project-color-${index % 4} ${hoveredIndex === index ? 'hovered' : ''}`}>
                </div>
                <div className={`project-overlay ${hoveredIndex === index ? 'visible' : ''}`}>
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-type">{project.type}</p>
                  </div>
                </div>
              </div>
              {index % 2 === 0 && <div className="project-dot"></div>}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-bg"></div>
            <div className="about-image"></div>
            <div className="about-badge">
              <p className="about-badge-text">That's me!</p>
            </div>
          </div>
          <div className="about-content">
            <h2 className="about-title">
              Hey! I'm <span className="about-title-italic">Piper</span>
            </h2>
            <p className="about-text">
              I'm a senior engineering student at CU Boulder. Majoring in Creative Technology & Design, I love brinfing my ideas into the real world.
            </p>
            <p className="about-text">
              My work is all about capturing feelings—whether through a brushstroke, a photo, or a piece of clay. I love experimenting with different mediums and seeing where my creativity takes me!
            </p>
            <div className="about-list">
              <div className="about-list-item">
                <div className="about-bullet"></div>
                <span className="about-list-text">Currently studying Creative Technology & Design</span>
              </div>
              <div className="about-list-item">
                <div className="about-bullet"></div>
                <span className="about-list-text">Proficent in Adobe, Front End Web Development, and Figma</span>
              </div>
              <div className="about-list-item">
                <div className="about-bullet"></div>
                <span className="about-list-text">I love climbing!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="contact">
        <div className="contact-title-wrapper">
          <div className="contact-glow"></div>
          <h2 className="contact-title">
            Let's <span className="contact-title-italic">Connect</span>!
          </h2>
        </div>
        <div className="contact-icons">
          <a href="#" className="contact-icon-link">
            <Mail className="contact-icon" />
          </a>
          <a href="https://www.instagram.com/piper.vetowich/" className="contact-icon-link">
            <Instagram className="contact-icon" />
          </a>
        </div>
        <a href="mailto:hello@sophia.com" className="contact-email-wrapper">
          <div className="contact-email-bg"></div>
          <div className="contact-email">
            Pipervetowich@gmail.com
          </div>
        </a>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <Heart className="footer-icon" fill="currentColor" />
          <span>made with love</span>
        </div>
      </footer>
    </div>
  );
}