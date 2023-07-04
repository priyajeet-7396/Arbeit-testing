import React from "react";
import "./CardImg.css";

const Card = ({ imageSrc, title }) => {
  return (
    <div className="cardImg">
      <img className="card-Img" src={imageSrc} alt={title} />
      <h3 className="card-Img-title">{title}</h3>
    </div>
  );
};

export default Card;
