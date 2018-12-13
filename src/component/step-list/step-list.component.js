import React from 'react';
import { stepValueList } from './step-data-list'
import './step-list.css'

import Step from '../step/step.component';

const StepList = () => {
    return (
        <div>
            {stepValueList.map((stepValue, key) => (
                <div className='step-list'>
                    <Step key={key} {...stepValue} />
                </div>
                )
            )}
        </div>
    )
}

export default StepList;