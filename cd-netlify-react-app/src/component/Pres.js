import React from 'react';
import './pres.css';
import Image from '../Tu_Thomas_TP.jpg';
import NetflixVideo from '../Netflix.Final.mp4'; 
import Finale from '../Final.mp4';
import Toto from '../TU_Thomas.mp4';
const Pres = () => {
  return (
    <div className="flex flex-col items-start gap-8">
      {/* Image de profil */}
      <div>
        <img
          src={Image}
          alt="img"
          className="image"
          style={{
            width: '800px',
            height: 'auto',
            marginLeft: '5%',
            borderRadius: '8px',
            border: '2px solid #ddd',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      {/* Première iframe Figma */}
      <div style={{ alignSelf: 'flex-end' }}>
        <iframe
          style={{
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            width: '800px',
            height: '450px',
            paddingRight: '5%',
          }}
          src="https://embed.figma.com/proto/oQdPj2mWfs2Aqrwl5szZpl/FT3--CDN?node-id=972-218&node-type=canvas&scaling=min-zoom&content-scaling=fixed&page-id=136%3A0&starting-point-node-id=972%3A218&show-proto-sidebar=1&embed-host=share"
          allowFullScreen
          title="Figma Prototype 1"
        ></iframe>
      </div>

      {/* Deuxième iframe Figma */}
      <div style={{ alignSelf: 'flex-start' }}>
        <iframe
          style={{
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            width: '800px',
            height: '450px',
            marginLeft: '5%',
          }}
          src="https://embed.figma.com/proto/zjFnukqTQK7W7R7yhzrajG/Dataviz-ft2?node-id=1681-188&node-type=canvas&scaling=contain&content-scaling=fixed&page-id=0%3A1&embed-host=share"
          allowFullScreen
          title="Figma Prototype 2"
        ></iframe>
      </div>

      {/* Troisième iframe Figma */}
      <div style={{ alignSelf: 'flex-end' }}>
        <iframe
          style={{
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            width: '800px',
            height: '450px',
            paddingRight: '5%',
          }}
          src="https://embed.figma.com/proto/DVBo9RubB4rUx0knXc9yHk/Portfolio-Thomas-TU?node-id=63-2042&node-type=canvas&scaling=min-zoom&content-scaling=fixed&page-id=63%3A1632&starting-point-node-id=63%3A2042&embed-host=share"
          allowFullScreen
          title="Figma Prototype 3"
        ></iframe>
      </div>

      {/* Titre pour la section Motion */}
      <div style={{ alignSelf: 'center' }}>
        <h1 className="mo">Motion</h1>
      </div>

      {/* Vidéo */}
      <div style={{ alignSelf: 'flex-start', marginLeft: '5%' }}>
        <video
          src={NetflixVideo}
          controls
          style={{
            width: '650px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        ></video>
      </div>
      <div style={{ alignSelf: 'center', marginLeft: '5%' }}>
        <video
          src={Finale}
          controls
          style={{
            width: '650px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        ></video>
      </div>
      <div style={{ alignSelf: 'flex-end',paddingRight: '5%' }}>
        <video
          src={Toto}
          controls
          style={{
            width: '650px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        ></video>
      </div>
    </div>
  );
};

export default Pres;
