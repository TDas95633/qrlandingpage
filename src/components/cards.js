import React from "react";
import '../styles/tailwind.css'
import '../animations/scaledown.css'
import '../animations/gradient.css'
import '../animations/click.css'
import '../animations/wiggle.css'

const Cards = ({logoUrl, textUrl, icon, text, textUrlDisplay}) => {
    return (
        <div className='flex content-center items-center justify-start rounded-xl bg-white/50 drop-shadow-md' style={{ height: '20%', width: '80%' }}>
            <div className="flex-row gap-2 justify-center wiggle">
            <a href={logoUrl}>

                    <img src={icon} className='bg-white/80 rounded-full clickable-element m-5 size-20 md shadow-2xl' alt='' style={{}}></img>
                </a>
            </div>
            <div>
                <p className="text-sm md:text-xl text-center text-white">{text}</p>
                <a className="text-xl md:text-2xl text-white font-bold" href={textUrl}>{textUrlDisplay}</a>
            </div>
            
        </div>
    )
}

export default Cards;