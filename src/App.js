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
    <div className="bg-cover p-0 m-0 ackdrop-brightness-0"
      style={{ backgroundImage: `url(${backgroundImage})`}}
    >
      <div className='justify-center backdrop-blur-md'>
        <div className='flex justify-center'>
          <img src={Navlogo} alt='Xponent' className='scale-down-center md:animate-none size-12/12 md:size-2/12 ' />
        </div>

        <div className='flex justify-center mb-4'>
          <Cards icon={instagram} logoUrl='//instagram.com/_u/xponentfunds/#Intent;package=com.instagram.android;scheme=https;end' text='Checkout our page!' textUrlDisplay='@xponentfunds' textUrl='https://www.instagram.com/xponentfunds' />
        </div>
        <div className='flex justify-center mb-4'>
          <Cards icon={facebook} logoUrl='https://www.facebook.com/xponentfunds' text='Follow us on Facebook!' textUrlDisplay='/xponentfunds' textUrl='https://www.facebook.com/xponentfunds' />
        </div>
        <div className='flex justify-center mb-4'>
          <Cards icon={youtube} logoUrl='https://www.youtube.com/@xponentfunds' text='Watch our videos!' textUrlDisplay='@xponentfunds' textUrl='https://www.youtube.com/@xponentfunds' />
        </div>
        <div className='flex justify-center mb-4'>
          <Cards icon={telegram} logoUrl='tg://resolve?domain=xponentfund/' text='Get real-time analysis!' textUrlDisplay='@xponentfunds' textUrl='https://xponent.vercel.app' />
        </div>
        <div className='flex justify-center pb-8'>
          <Cards icon={linkedin} logoUrl='https://www.linkedin.com/company/xponent-fund-management' text='Connect with us!' textUrlDisplay='Xponent Funds' textUrl='https://www.linkedin.com/company/xponent-fund-management' />
        </div>

      </div>
    </div>

  );
}

export default App;
