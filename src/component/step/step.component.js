import React from 'react';
import './step.css';

const Step = ({ label = 'Step 1', hexColor }) => (
  <div className="step" style={{ backgroundColor: hexColor }}>{label}</div>
)
export default Step;