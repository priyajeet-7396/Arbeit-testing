import React, { useState } from 'react';
import './BannerImg.css'; // CSS file for styling
import image1 from '../../assets/banner_hr/banner.jpg';
import image2 from '../../assets/banner_hr/banner2.jpg';

const images = [image1, image2];

const slideData = [
  {
    heading: 'Find Right Jobs',
    paragraph: 'We offer premium selection of jobs across industry sectors at all levels. Share your resume to job@arbeit.com so that we can help you find and get places in the right place.',
  },
  {
    heading: 'Find Right Talent',
    paragraph: 'Our bespoke recruitment solutions use right mix of technology and human intelligence to attract, shortlist and hire the right talent',
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="banner_hr">
      <div className="slider_hr" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide_hr">
            <img src={image} alt="Banner" className="image_hr" />
            <div className="content_hr">
              <h2 className="heading_hr">{slideData[index].heading}</h2>
              <p className="paragraph_hr">{slideData[index].paragraph}</p>
              <a href="/joinus" className="contact_link_hr">
    <button className="contact_btn_hr">Contact Us</button>
  </a>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows_hr">
        <button className="arrow_hr left_hr" onClick={handlePrevSlide}>
          &lt;
        </button>
        <button className="arrow_hr right_hr" onClick={handleNextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Banner;
