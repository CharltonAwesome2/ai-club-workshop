// App.jsx
import React from "react";
import "./App.css";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaInstagram, FaEnvelope, FaQrcode } from "react-icons/fa";
import { RiAiGenerate, RiMessage2Line } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi";
import { TbBrandTeams } from "react-icons/tb";
import logoCput from "./assets/cput-logo.png";
import qrCode from "./assets/qr-code.png";
import logoCircle from "./assets/cput-ai-club-logo-circle.png";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-badge">
          <span className="badge-text">AI CLUB PRESENTS</span>
        </div>
        <h1 className="hero-title">
          <div className="hero-logo">
            <img src={logoCircle} alt="AI club logo" />
          </div>
          AI WORKSHOP SERIES<span className="highlight"></span>
        </h1>
        <p className="hero-subtitle">Real AI skills. Real student success.</p>

        <div className="hero-stats">
          <div className="stat">
            <FaCalendarAlt className="stat-icon" />
            <span>29–30 APR 2026</span>
          </div>
          <div className="stat">
            <FaClock className="stat-icon" />
            <span>15:30 – 17:00 (SAST)</span>
          </div>
          <div className="stat">
            <TbBrandTeams className="stat-icon" />
            <span>Microsoft Teams</span>
          </div>
          <div className="stat">
            <FaUsers className="stat-icon" />
            <span>CPUT Students, Staff & Lecturers</span>
          </div>
        </div>
      </header>

      {/* Topics Grid */}
      <section className="topics">
        <div className="container">
          <h2 className="section-title">WORKSHOP TOPICS</h2>
          <div className="topics-grid">
            <div className="topic-card">
              <div className="topic-icon">
                <HiSparkles size={36} />
              </div>
              <h3>WHAT IS AI?</h3>
              <p>Understand the basics of Artificial Intelligence and how it shapes our world.</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">
                <RiMessage2Line size={36} />
              </div>
              <h3>WHAT'S A PROMPT?</h3>
              <p>Learn what a prompt is, why it matters, and how to write effective prompts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-container">
          <div className="cta-content">
            <h2>
              JOIN US & BE PART OF THE
              <br />
              AI REVOLUTION!
            </h2>
            {/* <button className="cta-button" onClick={() => window.open("#", "_blank")}>
              REGISTER NOW →
            </button> */}
            <p className="cta-note">Teams link will be shared closer to the scheduled time</p>
          </div>
          <div className="qr-card">
            <div className="qr-code">
              <img src={qrCode} alt="QR Code to join workshop" />
            </div>
            <p className="qr-text">SCAN TO JOIN</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logoCput} alt="CPUT Logo" className="cput-logo" />
            <span>POWERED BY AI CLUB, CPUT</span>
          </div>
          <div className="footer-social">
            <a
              href="https://instagram.com/ai_club_cput"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram className="social-icon" />
              @ai_club_cput
            </a>
            <a href="mailto:aiclub@cput.ac.za" className="social-link email">
              <FaEnvelope className="social-icon" />
              aiclub@cput.ac.za
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 AI Club, CPUT — Innovating Together</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
