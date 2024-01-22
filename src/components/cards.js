import React from "react";
import Navlogo from '../images/navlogo.svg'
import instagram from '../images/instagram.svg'
import '../styles/tailwind.css'
import '../animations/scaledown.css'
import '../animations/gradient.css'
import '../animations/click.css'

const Cards = () => {
    return(
          <div className='flex content-center items-center justify-start rounded-xl gradient-background drop-shadow-md' style={{height: '20vh', width: '80vw'}}>
              <div className="flex-row justify-center">
              <img src={instagram} className='bg-white/10 rounded-full clickable-element m-5 size-20 md shadow-2xl' alt='' style={{}}></img>
              </div>
              <div>
              <h1>Check out our Instagram</h1>
              <h1>Check out our Instagram</h1>
              <h1>Check out our Instagram</h1>
              </div>
              <div>
            
              </div>
              
              
          
        </div>
    )
}

export default Cards;