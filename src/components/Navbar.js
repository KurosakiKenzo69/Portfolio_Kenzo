import React from "react";
import '../styles/navbar.css';

export default function Navbar() {
  return (
      <div className="navbar-container">
        <ul className="navbar-list">
          <a href="#accueil" className="navbar-link">
            <li>Accueil</li>
          </a>
          <a href="#experience" className="navbar-link">
            <li>Expériences</li>
          </a>
          <a href="#interets" className="navbar-link">
            <li>Mes intérêts</li>
          </a>
          <a href="#contact" className="navbar-link">
            <li>Contact</li>
          </a>
        </ul>
      </div>
  );
}
