import React, { useContext } from 'react';
import './step.scss';
import { DispatchContext } from '../../App';

const Step = ({ label = 'Step 1', hexColor, step }) =>{
  
  const dispatch = useContext(DispatchContext)
  const setStep = step => {
    console.log(step)
    dispatch({ type: 'SET_SLIDE', payload: step})
  }
  return(
    <div 
      className="step" 
      style={{backgroundColor: hexColor, borderColor: hexColor}} 
      onClick={() => setStep(step)}
      >{label}</div>
)}
export default Step;