import React, { createContext, useReducer } from 'react';
import StepList from './component/step-list';
import FormSlider from './component/form-slider';
import { initialState, reducer } from './redux'
import './App.css';
import NumberStepper from './component/number-stepper';

export const StateContext = createContext(initialState);
export const DispatchContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <StepList />
          <FormSlider sliderWidth="600px" />
          <NumberStepper />
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
