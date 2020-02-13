import React from "react";
import "./flowerCard.css";

const flowerCard = props => (
  <div className="flower-card img-fluid" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default flowerCard;
