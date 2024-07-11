import React from 'react';
import mail from '../email.png';
import Github from '../github.png';
import Linkedin from '../linkedin.png';

export default function Contact() {
  return (
    
    <div className="w-full bg-[#8D73EA] text-white overflow-hidden">
        <p> <h1>Me contacter</h1></p>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
        </h2>
        <div className="mx-auto mt-10 flex items-center justify-center">
          <a href="mailto:tu.thomas01@gmail.com" className="w-20">
            <img
              className="w-full h-auto"
              src={mail}
              alt="Email"
            />
          </a>
          <a href="https://github.com/Thomastu1" className="w-20">
            <img
              className="w-full h-auto"
              src={Github}
              alt="GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/thomas-tu-0194a3141/" className="w-20">
            <img
              className="w-full h-auto"
              src={Linkedin}
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
