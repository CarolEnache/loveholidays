import React, { useContext } from 'react';
import { StateContext } from '../../App';
import './form-slider.scss'

const FormSlider = ({ sliderWidth }) => {
    const { currrentStep } = useContext(StateContext)

    return (
        <div className="form-slider__wrapper">
            {[1,2,3,4].map(x => {
                return (
                    <input
                        key={x}
                        className="form-slider__radio"
                        checked={currrentStep === x}
                        onChange={() => {}}
                        type="radio" 
                        name="slider" />
                )
            })}
            <div className="form-slider">
                <div className="form-slider__slide" style={{ width: sliderWidth, backgroundColor: '#c00' }}>1</div>
                <div className="form-slider__slide" style={{ width: sliderWidth, backgroundColor: '#f00' }}>2</div>
                <div className="form-slider__slide" style={{ width: sliderWidth, backgroundColor: '#ce0' }}>3</div>
                <div className="form-slider__slide" style={{ width: sliderWidth, backgroundColor: '#ee0' }}>4</div>
            </div>
        </div>
    )
}
export default FormSlider; 