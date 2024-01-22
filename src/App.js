// src/App.js

import React from 'react';
import backgroundImage from './images/background.jpg';
import Navlogo from './images/navlogo.svg'
import './styles/tailwind.css'
import './animations/scaledown.css'
import './animations/gradient.css'
import Cards from './components/cards';

function App() {
  return (
    <div className="bg-cover backdrop-brightness-0"
      style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', width: '100vw' }}
    >
      <div className='justify-center backdrop-blur-md' style={{ height: '100vh', width: '100vw' }}>
        <div className='flex justify-center'>
          <img src={Navlogo} alt='Xponent' className='scale-down-center md:animate-none size-12/12 md:size-2/12 ' />
        </div>

        <div className='flex justify-center'>

          <Cards />
        </div>

      </div>
    </div>

  );
}

export default App;
