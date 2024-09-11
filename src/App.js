import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BlueText} from './components/BlueText';
import Profile from './img/jpg_photo.jpeg';
import Skills from './components/Skills';


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
                <div className="intro-text">
                    <BlueText>Salut, je m'appelle</BlueText>
                    <span>Kenzo</span>
                </div>
                <div className="profile-picture">
                    <img src={Profile} className="profile-img" alt="Profile"/>
                </div>
            </div>
            <div className="skills-section">
                {/* Section des compétences */}
                <div className="skills-titles">
                    <h2 className="skills-title">Frontend</h2>
                    <h2 className="skills-title">Backend</h2>
                    <h2 className="skills-title">Outils</h2>
                </div>
                <div className="skills-columns">
                    {/* Colonne Frontend */}
                    <div className="skills-column">
                        <Progress title="HTML" percentage={90}/>
                        <Progress title="CSS" percentage={85}/>
                        <Progress title="JavaScript" percentage={80}/>
                    </div>

                    {/* Colonne Backend */}
                    <div className="skills-column">
                        <Progress title="Node.js" percentage={75}/>
                        <Progress title="Express" percentage={70}/>
                        <Progress title="MongoDB" percentage={60}/>
                    </div>

                    {/* Colonne Outils */}
                    <div className="skills-column">
                        <Progress title="Git" percentage={95}/>
                        <Progress title="Webpack" percentage={70}/>
                        <Progress title="Docker" percentage={60}/>
                    </div>
                </div>
            </div>

            {/* Section du CV */}
            <div className="cv-section">
                <a href="/path-to-your-cv" className="cv-button">
                    Télécharger CV
                </a>
            </div>
        </div>
    );
}

export default App;
