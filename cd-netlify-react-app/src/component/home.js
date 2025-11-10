
import React from 'react';
import './home.css';
import profileImage from '../head.png'



const Home = () => {
    return (
      <div className="hoome">
        <header>
          <h1 className="titre">Bienvenue sur mon Portfolio</h1>
        </header>
  
        <div className="image-container flex items-center justify-end mt-8 sm:mt-0">
          <p className="h2">
            Brand content et management | En recherche d'une alternance dès que possible dans la communication ou marketing
            <br />
            <br />
            Rythme : 4 jours entreprise (lundi - jeudi) | 1 jours formation (vendredi)
            <br />
            <br />
            Passioné par les réseaux sociaux, la création de contenu et les sports d'équipes tels que le football et le basketball mais aussi le volley-ball, je connais l'importance de la cohésion d'équipe et de la communication.
            <br />
            De plus je pratique le volley-ball 2 jours par semaine en loisir.
          </p>
          <img src={profileImage} alt="Profil" className="profile-image" />
        </div>
      </div>
    );
  };
  
  export default Home;
  