import React, { useEffect, useRef } from 'react';
import './ParallaxSentence.css';

const ParallaxSentence = () => {
  const sentenceRef = useRef(null);
  const promptRef = useRef(null);
  const previousScrollPosition = useRef(window.pageYOffset || document.documentElement.scrollTop);

  useEffect(() => {
    const handleScroll = () => {
      const element = sentenceRef.current;
      const revealThreshold = element.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.6; // Adjusted reveal threshold
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const scrollUp = scrollPosition < previousScrollPosition.current;

      if (scrollPosition > revealThreshold) {
        element.classList.add('reveal');
        promptRef.current.style.opacity = scrollUp ? 0 : 1;
      } else {
        element.classList.remove('reveal');
        promptRef.current.style.opacity = 1;
      }

      previousScrollPosition.current = scrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-sentence" ref={sentenceRef}>
      <div className="parallax-layer">Our Solutions</div>
      <div className="prompt" ref={promptRef}>
    
      </div>
    </div>
  );
};

export default ParallaxSentence;
