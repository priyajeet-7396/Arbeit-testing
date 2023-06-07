import React from 'react';
import './Approach_mobile.css';
import image1 from '../../../assets/ourApproach/1.webp';
import image2 from '../../../assets/ourApproach/2.webp';
import image3 from '../../../assets/ourApproach/3.webp';
import image4 from '../../../assets/ourApproach/4.webp';

const Approachmobile = () => {
    return (
        <div className="image-card-component">
          <h1>What We Do</h1>
          <div className="image-cards">
            <div className="image-card">
              <img src={image1} alt="Image 1" />
              <div className="image-card-overlay">
                <h2>Collaborative Partnership</h2>
              </div>
            </div>
            <div className="image-card">
              <img src={image2} alt="Image 2" />
              <div className="image-card-overlay">
                <h2>Innovation and Agility</h2>
              </div>
            </div>
            <div className="image-card">
              <img src={image3} alt="Image 3" />
              <div className="image-card-overlay">
                <h2>Innovation and Agility</h2>
              </div>
            </div>
            <div className="image-card">
              <img src={image4} alt="Image 4" />
              <div className="image-card-overlay">
                <h2>Expertise and Excellence</h2>
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default Approachmobile;
