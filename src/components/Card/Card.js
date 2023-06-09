import React from 'react';
import './Card.css';

const Card = ({ title, iconName }) => {
  const IconComponent = iconName;

  return (

    <div className="card">
      <div className="card-icon">
        <IconComponent className= " icon" size={50} />
      </div>
      <div className="card-title">
        {title}
      </div>
    </div>
  );
};

export default Card;
