import React from 'react';
import mail from '../email.png';
import Github from '../github.png';
import Linkedin from '../linkedin.png';

export default function Contact() {
  return (
<div className='bg-[#3930A6]'>
        <h1 className="text-3xl font-bold leading-9 text-white">Me contacter</h1>
        <div className="mt-10 flex items-center justify-center space-x-8">
          <a href="mailto:tu.thomas01@gmail.com" className="w-20">
            <img className="w-full h-auto" src={mail} alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/thomas-tu-0194a3141/" className="w-20">
            <img className="w-full h-auto" src={Linkedin} alt="LinkedIn" />
          </a>
        </div>
        </div>

  );
}
