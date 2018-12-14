import React from 'react';
import { stepValueList } from './step-data-list'

import './step-list.scss'

import Step from '../step/step.component';

const StepList = () => {
    return (
        <div className="step-list">
            {stepValueList.map((stepValue, key) => (
                    <Step key={key} {...stepValue} step={key + 1} />
                )
            )}
        </div>
    )
}

export default StepList;