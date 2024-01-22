// src/App.js

import React from 'react';
import backgroundImage from './images/background.jpg';
import Navlogo from './images/navlogo.svg'
import './styles/tailwind.css'
import './animations/scaledown.css'
import './animations/gradient.css'
import Cards from './components/cards';
import instagram from './images/instagram.svg'
import linkedin from './images/linkedin.svg'
import youtube from './images/youtube.svg'
import telegram from './images/telegram.svg'
import facebook from './images/facebook.svg'

function App() {
  return (
    <div className="bg-cover backdrop-brightness-0"
      style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', width: '100vw' }}
    >
      <div className='justify-center backdrop-blur-md' style={{ height: '100vh', width: '100vw' }}>
        <div className='flex justify-center'>
          <img src={Navlogo} alt='Xponent' className='scale-down-center md:animate-none size-12/12 md:size-2/12 ' />
        </div>

        <div className='flex justify-center mb-4'>
          <Cards icon={instagram} logoUrl='//instagram.com/_u/xponentfunds/#Intent;package=com.instagram.android;scheme=https;end' text='Checkout our Instagram Page!' textUrlDisplay='@xponentfunds' />
        </div>
        <div className='flex justify-center mb-4'>
          <Cards icon={facebook} logoUrl='https://www.facebook.com/xponentfunds' text='Follow us on Facebook!' textUrlDisplay='fb/xponentfunds' />
        </div>
        <div className='flex justify-center mb-4'>
          <Cards icon={youtube} logoUrl='//instagram.com/_u/xponentfunds/#Intent;package=com.instagram.android;scheme=https;end' text='Checkout our Instagram Page!' textUrlDisplay='@xponentfunds' />
        </div>
        <div className='flex justify-center mb-4'>
          <Cards icon={telegram} logoUrl='//instagram.com/_u/xponentfunds/#Intent;package=com.instagram.android;scheme=https;end' text='Checkout our Instagram Page!' textUrlDisplay='@xponentfunds' />
        </div>
        <div className='flex justify-center mb-4'>
          <Cards icon={linkedin} logoUrl='//instagram.com/_u/xponentfunds/#Intent;package=com.instagram.android;scheme=https;end' text='Checkout our Instagram Page!' textUrlDisplay='@xponentfunds' />
        </div>

      </div>
    </div>

  );
}

export default App;
