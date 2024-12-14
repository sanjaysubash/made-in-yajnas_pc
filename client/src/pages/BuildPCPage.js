import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BuildPCPage.css';

const BuildPCPage = () => {
  const [components, setComponents] = useState([]);
  const [error, setError] = useState(null);

  const fetchComponents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/components');
      setComponents(response.data);
    } catch (err) {
      setError('Failed to fetch components. Please try again later.');
      console.error('Error fetching components:', err);
    }
  };

  useEffect(() => {
    fetchComponents();
  }, []);

  return (
    <div className="build-pc-page">
      <h1>Build Your PC</h1>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="components">
          {components.map((component, index) => (
            <div key={index} className="component-card">
              <h3>{component.name}</h3>
              <p>{component.description}</p>
              <p>Price: ${component.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuildPCPage;
