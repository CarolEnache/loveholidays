import React, { useContext } from 'react';
import { StateContext, DispatchContext } from '../../App';


const NumberStepper = () => {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    const plus = () => {
        dispatch({type: 'INCREMENT_NUMBER'})
    }
    const minus = () => {
        dispatch({type: 'DECREMENT_NUMBER'})
    }
    return (
        <div>
            <button onClick={minus}>-</button>
            {state.number}
            <button onClick={plus}>+</button>
        </div>
    )
}

export default NumberStepper;