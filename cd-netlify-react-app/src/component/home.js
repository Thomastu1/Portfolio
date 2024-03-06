
import React from 'react';
import './home.css';
import profileImage from '../head.png'
import cv from '../CV.jpg'


const Home = () => {
  return (
    <div class="hoome">
      <header>
       
  
        <h1 className='titre'>Bienvenue sur mon Portfolio</h1>
      </header>

      <div className="image-container flex items-center justify-end">
      <p class="h2 mr-4">Développeur web FrontEnd | En recherche d'une alternance pour Janvier 2024 <br/><br/>
        Rythme : 3 jours entreprise (mercredi - vendredi) | 2 jours formation (lundi - mardi)  </p>
          <img src={profileImage} alt="Profil" className="profile-image" />
     
        </div>
        <div className="cv-container">
          <a href={cv} target="_blank" rel="noopener noreferrer">Voir mon CV</a>

          </div>
    </div>
  );
};

export default Home;
