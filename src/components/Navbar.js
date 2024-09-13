import React from "react";
import '../App.css';
import logo from '../img/Kenzo vongkingkeo.png';

export default function Navbar() {
  return (
          <div className="navbar-container">
            <img src={logo} alt="logo" id={'logo'}/>
            <ul className="navbar-list">
          <a href="#accueil" className="navbar-link">
            <li>Accueil</li>
          </a>
          <a href="#interets" className="navbar-link">
            <li>Mes intérêts</li>
          </a>
          <a href="#skills" className="navbar-link">
            <li>Mes compétences</li>
          </a>
          <a href="#experience" className="navbar-link">
            <li>Expériences</li>
          </a>
          <a href="#contact" className="navbar-link">
            <li>Contact</li>
          </a>
        </ul>
      </div>
  );
}
