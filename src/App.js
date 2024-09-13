import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {GreenText} from './components/GreenText';
import Skills from './components/Skills';
import cs from './img/c-sharp.svg';
import php from './img/php.svg';
import vuejs from './img/vue-9-logo-svgrepo-com.svg';
import reactjs from './img/react-svgrepo-com.svg';
import tailwind from './img/tailwind-svgrepo-com.svg';
import css from './img/css-3-svgrepo-com.svg';
import symfony from './img/symfony-svgrepo-com.svg';
import python from './img/python-svgrepo-com.svg';



const Progress = ({title, percentage}) => (
    <div className="progress-bar-container">
        <span className="progress-title">{title}</span>
        <div className="progress-bar-background">
            <div
                className="progress-bar-fill"
                style={{width: `${percentage}%`}}
            ></div>
        </div>
    </div>
);


function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="intro-section">
                <div className="profile-picture">
                    <img
                        src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=Default&mouthType=Twinkle&skinColor=Light'/>
                </div>
                <div className="intro-text">
                    <GreenText
                        texts={["Développeur web", "Développeur full-stack", "Développeur mobile", "Développeur junior"]}/>
                    <h3 className={'presentation'}>Je m'appelle Kenzo VONGKINGKEO. <br/> Passionné par l'informatique
                        depuis mon enfance, j'essaie de réaliser des projets qui me plaisent et qui me donne envie de
                        progresser dans ce domaine</h3>
                </div>
            </div>

            {/*section compétences*/}
            <h1>Mes compétences</h1>
            <h2>Frontend</h2>
            <div className={"skills-section"}>
                    <Skills image={reactjs}  title={'React'} description={'React est une bibliothèque JavaScript open-source qui est utilisée pour construire des interfaces utilisateur spécifiquement pour des applications d\'une seule page. Elle est utilisée pour gérer la couche d\'affichage des applications web et mobiles.'}></Skills>
                    <Skills image={vuejs}  title={'Vue.Js'} description={'Vue.js, est un framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web monopages.'}></Skills>
                    <Skills image={tailwind}  title={'TailwindCSS'} description={'Tailwind est un framework CSS novateur qui privilégie une approche basée sur les classes utilitaires. Plutôt que de définir des règles CSS spécifiques pour chaque élément, il permet l\'application directe de styles à l\'intérieur des balises HTML en utilisant des classes préétablies.'}></Skills>
                    <Skills image={css} title={'CSS'} description={'Les feuilles de style en cascade, généralement appelées CSS de l\'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML.'}></Skills>
            </div>
            <h2>Backend</h2>
            <div className={"skills-section"}>
                <Skills image={php} title={'PHP'}
                        description={'React est une bibliothèque JavaScript open-source qui est utilisée pour construire des interfaces utilisateur spécifiquement pour des applications d\'une seule page. Elle est utilisée pour gérer la couche d\'affichage des applications web et mobiles.'}></Skills>
                <Skills image={cs} title={'C#'}
                        description={'Vue.js, est un framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web monopages.'}></Skills>
                <Skills image={symfony} title={'TailwindCSS'}
                        description={'Tailwind est un framework CSS novateur qui privilégie une approche basée sur les classes utilitaires. Plutôt que de définir des règles CSS spécifiques pour chaque élément, il permet l\'application directe de styles à l\'intérieur des balises HTML en utilisant des classes préétablies.'}></Skills>
                <Skills image={css} title={'CSS'}></Skills>
            </div>


            <div className="cv-section">
                <a href="/path-to-your-cv" className="cv-button">
                    Télécharger CV
                </a>
            </div>
        </div>
    );
}

export default App;
