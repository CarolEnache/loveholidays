import React from 'react';
import Step from '../step/step.component';

const StepList = () => {
    const stepValueList = ['Step 1', 'Step 2']
    return (
        <div>
            {stepValueList.map((value, key) => (
                <div className='step-list'>
                    <Step key={key} value={value} />
                </div>
                )
            )}
        </div>
    )
}

export default StepList;