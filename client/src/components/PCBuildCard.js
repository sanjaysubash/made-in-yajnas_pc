import React, { useState } from 'react';
import './PCBuildCard.css';

const PCBuildCard = ({ component, addToCart }) => {
  const [selectedOption, setSelectedOption] = useState(component.options[0]);

  const handleAddToCart = () => {
    addToCart(component, selectedOption);
  };

  return (
    <div className="pc-build-card">
      <h3>{component.name}</h3>
      <p>Type: {component.type}</p>
      <select
        value={selectedOption.brand}
        onChange={(e) =>
          setSelectedOption(
            component.options.find((option) => option.brand === e.target.value)
          )
        }
      >
        {component.options.map((option, index) => (
          <option key={index} value={option.brand}>
            {option.brand} - ${option.price}
          </option>
        ))}
      </select>
      <p>Price: ${selectedOption.price}</p>
      <button className="btn-secondary" onClick={handleAddToCart}>
        Add to Build
      </button>
    </div>
  );
};

export default PCBuildCard;
