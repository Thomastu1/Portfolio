// Projet.jsx

import React from 'react';
import './projet.css';
import img1 from '../job.png';
import img2 from '../tower.jpg';
import img3 from '../discord.png';

const Projet = () => {
  return (
    <div className="section-container">

      <div className="column">
        <img src={img1} alt="1" />
        <div className="description">Projet Jobboard</div>
      </div>
      <div className="column">
        <img src={img2} alt="2" />
        <div className="description">Projet TowerDefense</div>
      </div>
      <div className="column">
        <img src={img3} alt="3" />
        <div className="description">Projet ChatBot</div>
      </div>
    </div>
  );
}

export default Projet;
