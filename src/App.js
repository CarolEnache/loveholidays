import React from 'react';
import StepList from './component/step-list';
import FormSlider from './component/form-slider';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <StepList />
      <FormSlider sliderWidth="600px" />
    </div>
  );
}

export default App;
