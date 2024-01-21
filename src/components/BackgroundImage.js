// src/components/BackgroundImage.js

import React from 'react';
import backgroundImage from '../images/background.jpg';
import '../styles/tailwind.css' // Replace with your image path

const BackgroundImage = () => {
  return (
    <div
      className="bg-cover blur-md backdrop-brightness-0"
      style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', width: '100vw' }}
    ></div>
  );
};

export default BackgroundImage;
