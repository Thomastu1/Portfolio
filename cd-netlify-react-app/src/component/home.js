
import React from 'react';
import './home.css';
import profileImage from '../head.png'
import cv from '../CV.jpg'



const Home = () => {
    return (
      <div className="hoome">
        <header>
          <h1 className="titre">Bienvenue sur mon Portfolio</h1>
        </header>
  
        <div className="image-container flex items-center justify-end mt-8 sm:mt-0">
          <p className="h2">
            Brand content et management | En recherche d'une alternance dès que possible
            <br />
            <br />
            Rythme : 4 jours entreprise (lundi - jeudi) | 1 jours formation (vendredi)
          </p>
          <img src={profileImage} alt="Profil" className="profile-image" />
        </div>
      </div>
    );
  };
  
  export default Home;
  