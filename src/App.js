import React, { Component } from 'react';
import Step from './component/step';
import StepList from './component/step-list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StepList />
      </div>
    );
  }
}

export default App;
