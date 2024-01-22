import React from "react";
import Navlogo from '../images/navlogo.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import youtube from '../images/youtube.svg'
import telegram from '../images/telegram.svg'
import '../styles/tailwind.css'
import '../animations/scaledown.css'
import '../animations/gradient.css'
import '../animations/click.css'

const Cards = () => {
    return (
        <div className='flex content-center items-center justify-start rounded-xl gradient-background drop-shadow-md' style={{ height: '20vh', width: '80vw' }}>
            <div className="flex-row justify-center">
                <a href="intent://instagram.com/_u/xponentfunds/#Intent;package=com.instagram.android;scheme=https;end">

                    <img src={instagram} className='bg-white/10 rounded-full clickable-element m-5 size-20 md shadow-2xl' alt='' style={{}}></img>
                </a>
            </div>
            <div>
                <p className="text-xl text-center text-white">Check out our Instagram!</p>
                <a className="text-2xl text-white font-bold" href='https://www.instagram.com/xponentfunds'>@xponentfunds</a>
            </div>
            
        </div>
    )
}

export default Cards;