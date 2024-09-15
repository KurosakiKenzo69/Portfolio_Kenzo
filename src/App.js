import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { GreenText } from "./components/GreenText";
import Skills from "./components/Skills";
import cs from "./img/c-sharp.svg";
import php from "./img/php.svg";
import vuejs from "./img/vue-9-logo-svgrepo-com.svg";
import reactjs from "./img/react-svgrepo-com.svg";
import tailwind from "./img/tailwind-svgrepo-com.svg";
import css from "./img/css-3-svgrepo-com.svg";
import symfony from "./img/symfony-svgrepo-com.svg";
import python from "./img/python-svgrepo-com.svg";
import cpp from "./img/c-plus-plus.svg";
import vscode from "./img/vscode2.svg";
import java from "./img/java-4.svg";
import git from "./img/git-svgrepo-com.svg";
import docker from "./img/docker-svgrepo-com.svg";
import vbox from "./img/vbox.jpeg";
import ContactForm from "./components/ContactForm";
import imgCode from "./img/code-1076536_640.jpg";


function App() {


  return (
    <div className="App">
      <header>
      <Navbar />
      <div className="intro-section">
        <div className="profile-picture">
          <img src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light" />
        </div>
        <div className="intro-text">
          <GreenText
            texts={[
              "Développeur web",
              "Développeur full-stack",
              "Développeur mobile",
              "Développeur junior",
            ]}
          />
          <h4 className={"presentation"}>
            Je m'appelle Kenzo VONGKINGKEO. <br /> Passionné par l'informatique
            depuis mon enfance, j'essaie de réaliser des projets qui me plaisent
            et qui me donne envie de progresser dans ce domaine. 
            <br />
            <br />
            <strong>A la recherche d'une opportunité en tant que développeur web full-stack, back-end ou front-end</strong>
            </h4>
        </div>
      </div>
      </header>

      {/*section compétences*/}
      <h1>Mes compétences</h1>
      <h2>Frontend</h2>
      <div className={"skills-section"}>
        <Skills
          image={reactjs}
          title={"React"}
          description={
            "React est une bibliothèque JavaScript open-source qui est utilisée pour construire des interfaces utilisateur spécifiquement pour des applications d'une seule page. Elle est utilisée pour gérer la couche d'affichage des applications web et mobiles."
          }
        ></Skills>
        <Skills
          image={vuejs}
          title={"Vue.Js"}
          description={
            "Vue.js, est un framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web monopages."
          }
        ></Skills>
        <Skills
          image={tailwind}
          title={"TailwindCSS"}
          description={
            "Tailwind est un framework CSS novateur qui privilégie une approche basée sur les classes utilitaires. Plutôt que de définir des règles CSS spécifiques pour chaque élément, il permet l'application directe de styles à l'intérieur des balises HTML en utilisant des classes préétablies."
          }
        ></Skills>
        <Skills
          image={css}
          title={"CSS"}
          description={
            "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML."
          }
        ></Skills>
      </div>
      <h2>Backend</h2>
      <div className={"skills-section"}>
        <Skills
          image={php}
          title={"PHP"}
          description={
            "React est une bibliothèque JavaScript open-source qui est utilisée pour construire des interfaces utilisateur spécifiquement pour des applications d'une seule page. Elle est utilisée pour gérer la couche d'affichage des applications web et mobiles."
          }
        ></Skills>
        <Skills
          image={cs}
          title={"C#"}
          description={
            "Vue.js, est un framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web monopages."
          }
        ></Skills>
        <Skills
          image={symfony}
          title={"TailwindCSS"}
          description={
            "Tailwind est un framework CSS novateur qui privilégie une approche basée sur les classes utilitaires. Plutôt que de définir des règles CSS spécifiques pour chaque élément, il permet l'application directe de styles à l'intérieur des balises HTML en utilisant des classes préétablies."
          }
        ></Skills>
        <Skills
          image={cpp}
          title={"C++"}
          description={
            "C++ est un langage de programmation généraliste qui est utilisé pour le développement de systèmes, de jeux, et d'applications performantes."
          }
        ></Skills>
        <Skills
          image={python}
          title={"Python"}
          description={
            // description python
            "Python est un langage de programmation interprété, multiparadigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet. Pratique pour aussi construire des APIs ou bien des applications web avec Django ou Flask."
          }
        ></Skills>
        <Skills
          image={java}
          title={"Java"}
          description={
            // description python
            "Java est un langage robuste et orienté objet, utilisé côté backend pour développer des applications web évolutives. Avec des frameworks comme Spring et Hibernate, il permet la gestion des API, des bases de données, et des services sécurisés."
          }
        ></Skills>
      </div>

      <h2>Outils</h2>
      <div className={"skills-section"}>
        <Skills
          image={vscode}
          title={"Visual Studio code"}
          description={
            "Visual Studio Code est un éditeur de code extensible développé par Microsoft pour Windows, Linux et macOS. Les fonctionnalités incluent la prise en charge du débogage, la mise en évidence de la syntaxe, la complétion intelligente du code, les snippets, la refactorisation du code et Git intégré."
          }
        ></Skills>
        <Skills
          image={php}
          title={"PHPStorm"}
          description={
            "PhpStorm est un environnement de développement intégré pour le langage de programmation PHP, écrit en Java. Il est développé par JetBrains."
          }
        ></Skills>
        <Skills
          image={symfony}
          title={"Symfony"}
          description={
            "Symfony est un ensemble de composants PHP ainsi qu'un framework MVC libre écrit en PHP. Il fournit des fonctionnalités modulables et adaptables qui permettent de faciliter et d'accélérer le développement d'un site web."
          }
        ></Skills>
        <Skills
          image={git}
          title={"Git"}
          description={
            "Git est un logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux, et distribué selon les termes de la licence publique générale GNU version 2."
          }
        ></Skills>
        <Skills
          image={docker}
          title={"Docker"}
          description={
            "Git est un logiciel de gestion de versions décentralisé. C'est un logiciel libre créé par Linus Torvalds, auteur du noyau Linux, et distribué selon les termes de la licence publique générale GNU version 2."
          }
        ></Skills>
        <Skills
          image={vbox}
          title={"VirtualBox"}
          description={
            "VirtualBox est un logiciel de virtualisation de systèmes d'exploitation. Il permet à un système d'exploitation hôte de lancer un ou plusieurs systèmes d'exploitation invités dans des environnements virtuels."
          }
        ></Skills>
      </div>
      <ContactForm/>
    </div>
  );
}

export default App;
