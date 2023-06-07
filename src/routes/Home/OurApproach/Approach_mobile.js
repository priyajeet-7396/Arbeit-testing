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
              <img src={image1} alt="Collaborative Partnership" />
              <div className="image-card-overlay">
                <h2>Collaborative Partnership</h2>
              </div>
            </div>
            <div className="image-card">
              <img src={image2} alt="Innovation and Agility" />
              <div className="image-card-overlay">
                <h2>Innovation and Agility</h2>
              </div>
            </div>
            <div className="image-card">
              <img src={image3} alt="Customer-Centric Focus" />
              <div className="image-card-overlay">
                <h2>Customer-Centric Focus</h2>
              </div>
            </div>
            <div className="image-card">
              <img src={image4} alt="Expertise and Excellence" />
              <div className="image-card-overlay">
                <h2>Expertise and Excellence</h2>
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default Approachmobile;
