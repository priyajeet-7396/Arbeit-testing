
import React from 'react';
import './HeroSection.css';
import video from '../../../assets/video-5.mp4';

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoPlay muted loop className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>Connecting talent with opportunity</h1>
      <p>Your future starts with us</p>
    </div>
  );
}

export default HeroSection;
