import React from 'react';
import './pres.css';

const Pres = () => {
  const experiences = [
    {
        title: 'UX/UI Designer (alternance)',
        company: 'Beevora',
        date: '2022',
        description: 'Définition et conception des landing pages,benchmark, création avec Figma'
      },
    {
        title: 'Assistant Digital Designer (stage)',
        company: 'Nova',
        date: '2021',
        description: 'Réalisation de contenus : annonces publicitaires, images promotionnelles avec Photoshop, MotionDesign, Excel'
      },
    {
      title: 'Employé Polyvalent (stage)',
      company: 'Électroménager Pièces Services',
      date: '2016',
      description: 'Réception des marchandises, conditionnement et étiquetage'
    },
    // Ajoutez d'autres expériences selon vos besoins
  ];

  const education = [
    {
        degree: 'Master Expert en Technologies de l Information',
        school: 'Epitech au Kremlin-Bicêtre',
        date: '2023-2026',
        description: 'Cours axés sur les technologies web et de la programmation',
      },
    {
      degree: 'Management du numérique',
      school: 'Web school factory à Paris',
      date: '2019-2023',
      description: 'Cours axés sur les technologies web, design et management de projets numériques',
    },

    {
        degree: 'Baccalauréat Scientifique',
        school: 'Lycée les Pierres Vives à Carrières-sur-Seine',
        date: '2019',
        description: 'Spécialisation sciences de l ingénieur',
      },
    // Ajoutez d'autres formations selon vos besoins
  ];

  return (
    
    <div className="grid grid-cols-2 gap-8">
      <div>


        <h2>Expérience Professionnelle</h2>
        <ul>
          {experiences.map((experience, index) => (
            <li key={index}>
              <h3>{experience.title}</h3>
              <p>{experience.company} / {experience.date}</p>
              <p>{experience.description}</p>
              <br />
            </li>
            
          ))}
        </ul>
      </div>

      <div>
        <h2>Formation Académique</h2>
        <ul>
          {education.map((edu, index) => (
            <li key={index}>
              <h3>{edu.degree}</h3>
              <p>{edu.school} / {edu.date}</p>
              <p>{edu.description}</p>
              <br />
            </li>
            
          ))}
        
        </ul>

      </div>
    </div>
  );
};

export default Pres;
