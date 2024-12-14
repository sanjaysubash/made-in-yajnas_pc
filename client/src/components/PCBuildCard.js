import React from "react";
import "./PCBuildCard.css";

const PCBuildCard = ({ component }) => {
  return (
    <div className="pc-build-card">
      <h3>{component.name}</h3>
      <p>Type: {component.type}</p>
      <p>Price: ${component.price}</p>
      <button className="btn-secondary">Add to Build</button>
    </div>
  );
};

export default PCBuildCard;
