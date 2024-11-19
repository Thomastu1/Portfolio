import Pres from './component/Pres';
import './App.css';
import Nav from './component/nav';
import Homea from './component/home';
import Contact from './component/contact';
import cvcv from './Desktop - 4.png';
import cvcv1 from './Desktop - 5.png';
import cvcv2 from './Desktop - 2.png';
import cvcv3 from './Desktop - 3.png';
import meme from './image 3.png';
import meme1 from './Group 1.png';
import meme2 from './meme1.png';
function App() {
  return (
    <div className="App">
      {/* Barre de navigation */}
      <Nav />
      
      {/* Section d'accueil */}
      <Homea />
      
      {/* Section Présentation */}
      <a href="#presentation" id="presentation"> </a>
      <br />
      <br />
      <p>
        <h1>Projets académiques</h1>
      </p>
      <Pres />
      <br />
      
      {/* Section Projets */}
      <a href="#projets" id="projets"> </a>
      <br />
      <p>
        <h1>Projets Perso</h1>
      </p>

      {/* Images alignées sur la même ligne */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center', // Centre les images horizontalement
          gap: '20px', // Espace entre les images
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <img
          src={cvcv}
          alt="Projet Perso 1"
          style={{
            width: '800px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
        <img
          src={cvcv1}
          alt="Projet Perso 2"
          style={{
            width: '800px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center', // Centre les images horizontalement
          gap: '20px', // Espace entre les images
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
         <img
          src={cvcv2}
          alt="Projet Perso 1"
          style={{
            width: '800px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
          <img
          src={cvcv3}
          alt="Projet Perso 1"
          style={{
            width: '800px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center', // Centre les images horizontalement
          gap: '20px', // Espace entre les images
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
       <img
          src={meme}
          alt="Projet Perso 1"
          style={{
            width: '400px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
         <img
          src={meme1}
          alt="Projet Perso 1"
          style={{
            width: '400px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
          <img
          src={meme2}
          alt="Projet Perso 1"
          style={{
            width: '400px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />

</div>
      {/* Section Contact */}
      <a href="#contact" id="contact"> </a>
      <Contact />
    </div>
   
  );
}

export default App;
