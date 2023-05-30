// for image 
// import React, { useState, useEffect } from 'react';
// import './Banner.css';

// const Banner = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) =>
//         prevSlide === slides.length - 1 ? 0 : prevSlide + 1
//       );
//     }, 7000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="banner">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`banner-slide ${currentSlide === index ? 'active' : ''}`}
//         >
//           <img src={slide.image} alt={slide.caption} />
//           <div className="text-overlay">
//             <h2 className={`slide-caption ${currentSlide === index ? 'animate' : ''}`}>
//               {slide.caption}
//             </h2>
//             <p className={`slide-description ${currentSlide === index ? 'animate' : ''}`}>
//               {slide.description}
//             </p>
//           </div>
//         </div>
//       ))}
//       <div className="banner-pagination">
//         {slides.map((_, index) => (
//           <span
//             key={index}
//             className={`pagination-dot ${
//               currentSlide === index ? 'active' : ''
//             }`}
//             onClick={() => setCurrentSlide(index)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;




















// for video 

import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`banner-slide ${currentSlide === index ? 'active' : ''}`}
        >
          <div className="video-overlay"></div> {/* Dark overlay element */}
          <video src={slide.video} autoPlay loop muted />
          <div className="text-overlay">
            <h2 className={`slide-caption ${currentSlide === index ? 'animate' : ''}`}>
              {slide.caption}
            </h2>
            <h2 className={`slide-titlt ${currentSlide === index ? 'animate' : ''}`}>
              {slide.title}
            </h2>
            
            <p className={`slide-description ${currentSlide === index ? 'animate' : ''}`}>
              {slide.description}
            </p>
            <p className={`slide-des ${currentSlide === index ? 'animate' : ''}`}>
              {slide.des}
            </p>
      
          </div>
        </div>
      ))}
      <div className="banner-pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`pagination-dot ${
              currentSlide === index ? 'active' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
