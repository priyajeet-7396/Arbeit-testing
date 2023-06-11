import React from 'react';
import testimonyImage from '../../../../assets/Testimony/pic1.jpg';
import './Testimony.css';

const Testimony = () => {
  return (
        <>
   
    <div className="testimony-container">
      <div className="blue-box">
        <h2 className="testimony-heading">How We Can Help You!</h2>
        <p className="testimony-paragraph">We are the market disruptors in the field of hiring. Along with rich experience and intelligence of our team, we make the machine work right from search to scoring the profile using AI and ML to see the fitment of candidate as well as Roles. With organizations, We work as a team and use our rich experience to fulfill the needs together.</p>
        <p>With Candidates, We help from creating right Resume to matching the right role.</p>
      </div>
      <img
        src={testimonyImage}
        alt="how we can help you "
        className="testimony-image"
      />
    </div>
    </>
  );
};

export default Testimony;
