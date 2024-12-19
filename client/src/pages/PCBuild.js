import React, { useState } from 'react';
import './PCBuild.css';
import PCBuildCard from '../components/PCBuildCard';

const PCBuild = () => {
  const [cart, setCart] = useState([]);

  // Define the components and options with base prices
  const components = [
    { name: 'Graphics Card', type: 'GPU', basePrice: 300, options: [{ brand: 'NVIDIA', price: 300 }, { brand: 'AMD', price: 280 }] },
    { name: 'Processor', type: 'CPU', basePrice: 200, options: [{ brand: 'Intel', price: 200 }, { brand: 'AMD', price: 190 }] },
    { name: 'Motherboard', type: 'Mobo', basePrice: 150, options: [{ brand: 'ASUS', price: 150 }, { brand: 'MSI', price: 140 }] },
    { name: 'RAM', type: 'Memory', basePrice: 80, options: [{ brand: 'Corsair', price: 80 }, { brand: 'G.SKILL', price: 75 }] },
    { name: 'Storage', type: 'SSD', basePrice: 100, options: [{ brand: 'Samsung', price: 100 }, { brand: 'Kingston', price: 90 }] },
    { name: 'PSU', type: 'Power Supply', basePrice: 80, options: [{ brand: 'Corsair', price: 80 }, { brand: 'EVGA', price: 70 }] },
    { name: 'Case', type: 'Chassis', basePrice: 70, options: [{ brand: 'NZXT', price: 70 }, { brand: 'Cooler Master', price: 65 }] },
    { name: 'Cooling System', type: 'Cooling', basePrice: 50, options: [{ brand: 'Air', price: 50 }, { brand: 'Liquid', price: 100 }] },
    { name: 'Operating System', type: 'OS', basePrice: 100, options: [{ brand: 'Windows', price: 100 }, { brand: 'Linux', price: 0 }] },
    { name: 'Peripherals', type: 'Peripherals', basePrice: 200, options: [{ brand: 'Logitech', price: 200 }, { brand: 'Razer', price: 210 }] }
  ];

  const addToCart = (component, selectedOption) => {
    setCart((prevCart) => [
      ...prevCart,
      { ...component, selectedOption, price: selectedOption.price }
    ]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="pc-build">
      <h2>Build Your Custom PC</h2>
      <p>Choose from the best components and create your perfect PC build.</p>
      <div className="pc-build-cards">
        {components.map((component, index) => (
          <PCBuildCard
            key={index}
            component={component}
            addToCart={addToCart}
          />
        ))}
      </div>

      <div className="cart-summary">
        <p>Total: ${calculateTotal()}</p>
        <button
          className="btn-primary"
          onClick={() => alert('Proceeding to Purchase')}
        >
          Proceed to Purchase
        </button>
      </div>
    </div>
  );
};

export default PCBuild;
