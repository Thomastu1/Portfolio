
import React from 'react';
import './projet.css';
import img1 from '../job.png';
import img2 from '../CVlogo.png';
import img3 from '../discord.png';

const Projet = () => {
  return (
    <div className="section-container">

      <div className="column">
      <a href="https://github.com/Thomastu1/Jobboard">
        <img src={img1} alt="1" />
        <div className="description">Projet Jobboard</div>
        </a>
      </div>
      <div className="column">
      <a href="https://github.com/Thomastu1/Portfolio">
        <img src={img2} alt="2" />
        <div className="description">Projet CV</div>
        </a>
      </div>
      <div className="column">
      <a href="https://github.com/Thomastu1/Trello-App">
        <img src={img3} alt="3" />
        <div className="description">Projet Trello</div>
        </a>
      </div>
    </div>
  );
}

export default Projet;
