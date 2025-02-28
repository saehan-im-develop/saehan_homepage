// src/Business/Solutions/StepComponent.jsx
import React from 'react';
import './Solutions.css';

const StepComponent = ({ title, image, points, isVisible }) => {
  return (
    <div className={`step-section ${isVisible ? "fade-in" : ""}`}>
      <img src={image} alt={title} className="step-image" />
      <div className="step-content">
        <h3>{title}</h3>
        <ul>
          {points.map((point, index) => (
            <li key={index}>✔ {point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StepComponent;
