import React from 'react';
import { FaReact, FaPython } from 'react-icons/fa'
import { DiRuby } from 'react-icons/di'
import { SiCsharp, SiGoland, SiTypescript } from 'react-icons/si'

import profile from '../assets/profile-pic.jpg'
import './ui.css'

const UI = () => {
  const style = {
    marginBottom: '2rem',
    fontStyle: 'italic'
  }

  return (
    <div className='dark'>
      <div className='card'>
        <div className='main-items'>
          <img src={profile} alt="Profile pic" />
          <div className="text">
            <h2 className='title'>Dashboard card</h2>
            <br />
            <h3 className='inner'>Name: Andrés Felipe Rodríguez Arias</h3>
            <h3 className='inner'>Role: Software Developer</h3>
            <h3 className="inner">Joined: 12/04/2019</h3>
            <h3 className="inner">Studies: Massachussets Institute of Technology</h3>
          </div>

        </div>
        <div className='details'>
          <h2>Main details:</h2>
          <br />
          <ul style={{ borderBottom: '1px solid rgba(167, 167, 167, 0.5)' }}>
            <li><p style={style}>The employee uses the MERN stack to develop the applications our clients need. Is also open to use other backend languages as
              Python, Ruby, C# or Golang.
            </p></li>
            <li><p style={style}>
              This is one of the top performers in the whole team, we are going to give the employee an outstanding bootcamp to use the Angular framework, as well
              as an extensive training in TypeScript.
            </p></li>
            <li>
              <p style={style}>
                By mid-june, the employee will be part of an exchange with an American university to have the opportunity to travel to the United States of America
                and get more professional relationships.
              </p>
            </li>
          </ul>
          <div className='icons'>
            <FaReact fontSize='large' />
            <FaPython fontSize='large' />
            <DiRuby fontSize='large' />
            <SiCsharp fontSize='large' />
            <SiGoland fontSize='large' />
            <SiTypescript fontSize='large' />
          </div>

        </div>
      </div>
    </div >
  );
};

export default UI;
