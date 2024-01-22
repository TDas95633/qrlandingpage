// src/App.js

import React from 'react';
import backgroundImage from './images/background.jpg';
import Navlogo from './images/navlogo.svg'
import './styles/tailwind.css'
import './animations/scaledown.css'
import './animations/gradient.css'

function App() {
  return (
    <div
      className="bg-cover backdrop-brightness-0"
      style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', width: '100vw' }}
    >
      <div className='container backdrop-blur-md' style={{height: '100vh', width: '100vw'}}>
        <div className='flex justify-center'>
          <img src={Navlogo} alt='Xponent' className='scale-down-center md:animate-none size-12/12 md:size-2/12 '/>
        </div>
        <div className='flex justify-center'>
          <div className='rounded-xl gradient-background' style={{width: '80vw', height: '20vh'}}>
              <img src='' className='' alt='' style={{}}></img>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
