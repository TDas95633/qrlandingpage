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
import call from './images/call.svg'
import email from './images/email.svg'

function App() {
  return (
    <div className="bg-contain bg-fixed scroll-m-0 scroll-p-0 overscroll-contain overflow-hidden backdrop-brightness-0"
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
          <Cards icon={facebook} logoUrl='fb://profile/?id=100086099315880' text='Follow us on Facebook!' textUrlDisplay='/xponentfunds' textUrl='https://www.facebook.com/xponentfunds' />
        </div>
        <div className='flex justify-center mb-4'>
          <Cards icon={youtube} logoUrl='https://www.youtube.com/@xponentfunds' text='Watch our videos!' textUrlDisplay='@xponentfunds' textUrl='https://www.youtube.com/@xponentfunds' />
        </div>
        <div className='flex justify-center mb-4'>
          <Cards icon={telegram} logoUrl='tg://resolve?domain=xponentfund/' text='Get real-time analysis!' textUrlDisplay='@xponentfunds' textUrl='https://xponent.vercel.app' />
        </div>
        <div className='flex justify-center mb-4'>
          <Cards icon={linkedin} logoUrl='https://www.linkedin.com/company/xponent-fund-management' text='Connect with us!' textUrlDisplay='Xponent Funds' textUrl='https://www.linkedin.com/company/xponent-fund-management' />
        </div>
        <div className='flex justify-center mb-4'>
          <Cards icon={email} logoUrl='mailto:help@xponentfunds.com' text='Reach out to us via' textUrlDisplay='help@xponentfunds.com' textUrl='mailto:help@xponentfunds.com' customPadding='p-2' />
        </div>
        <div className='flex justify-center pb-8'>
          <Cards icon={call} logoUrl='tel:+911169290876' text='Just a single call away!' textUrlDisplay='116 929 0876' textUrl='tel:+911169290876' customPadding='p-2' />
        </div>

      </div>
    </div>

  );
}

export default App;
