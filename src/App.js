import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BlueText} from './components/BlueText';
import Profile from './img/jpg_photo.jpeg';
import Skills from './components/Skills';

// barre de progression avec le titre de la compétence et le pourcentage de maîtrise
const Progress = ({ title, percentage }) => (
  <div className="flex flex-col gap-2">
    <span className="font-medium">{title}</span>
    <div className="w-64 h-4 bg-gray-200 rounded-full">
      <div
        className="h-full bg-blue-500 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);


function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="flex justify-center items-center gap-7 mt-20 mb-20">
      <div className="flex flex-col">
        <BlueText>Salut, je m'appelle</BlueText>
        <span>Kenzo</span>
      </div>
      <div className="w-20rem h-20rem overflow-hidden rounded-full">
      <img src={Profile} className="w-80 h-80 object-cover object-top" alt="Profile" />
    </div>
    </div>
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Mes compétences</h1>
      <Progress title="HTML" percentage={90} /> 
    </div>  
  </div>
  );
}

export default App;
