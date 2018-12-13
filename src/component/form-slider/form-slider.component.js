import React from 'react';
import './form-slider.scss'

const FormSlider = ({ sliderWidth }) => (
    <div className="form-slider__wrapper">
        <input className="form-slider__radio" type="radio" name="slider" />
        <input className="form-slider__radio" type="radio" name="slider" />
        <input className="form-slider__radio" type="radio" name="slider" />
        <input className="form-slider__radio" type="radio" name="slider" />
        <div className="form-slider">
            <div className="form-slider__slide" style={{ width: sliderWidth, backgroundColor: '#c00' }}>1</div>
            <div className="form-slider__slide" style={{ width: sliderWidth, backgroundColor: '#f00' }}>2</div>
            <div className="form-slider__slide" style={{ width: sliderWidth, backgroundColor: '#ce0' }}>3</div>
            <div className="form-slider__slide" style={{ width: sliderWidth, backgroundColor: '#ee0' }}>4</div>
        </div>
    </div>
)
export default FormSlider; 