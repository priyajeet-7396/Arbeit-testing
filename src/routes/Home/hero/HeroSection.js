import React, { useEffect, useState, useRef } from 'react';
import './HeroSection.css';
import video from '../../../assets/video-5.mp4';

function HeroSection() {
  const [shouldShow, setShouldShow] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(videoRef.current);

    setShouldShow(true);

    return () => {
      observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className="hero-container">
      <video ref={videoRef} autoPlay muted loop className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className={shouldShow ? 'fade-in-h1' : ''}>Tech Navigator</h1>
      <p className={shouldShow ? 'fade-in-p' : ''}>
        Challenging Boundaries with Unconventional Solutions
      </p>
    </div>
  );
}

export default HeroSection;
