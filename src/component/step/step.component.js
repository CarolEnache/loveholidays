import React from 'react';
import './step.scss';

const Step = ({ label = 'Step 1', hexColor }) => (
  <div className="step" style={{backgroundColor: hexColor, borderColor: hexColor}}>{label}</div>
)
export default Step;