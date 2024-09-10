import React from "react";

export default function Navbar() {
  return (
    <div className="group">
      <ul className="text-black flex inline gap-8 justify-center mt-8">
        <a
          className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 after:top-6"
          href="#accueil"
        >
          <li>Accueil</li>
        </a>
        <a
          className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 after:top-6"
          href="#experience"
        >
          <li>Expériences</li>
        </a>
        <a
          className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 after:top-6"
          href="#interets"
        >
          <li>Mes intérêts</li>
        </a>
        <a
          className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 after:top-6"
          href="#contact"
        >
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
}
