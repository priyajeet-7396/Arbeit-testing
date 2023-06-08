import React from 'react';
import { BsBank } from 'react-icons/bs'; // Replace 'IconName' with the specific icon you want to use from react-icons library
import './Card.css'; // Optional CSS file for styling the card component

const Card = ({ title }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <BsBank size={50} /> {/* Replace 'IconName' with the specific icon component */}
      </div>
      <div className="card-title">
        {title}
      </div>
    </div>
  );
};

export default Card;
