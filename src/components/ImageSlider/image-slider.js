import React, { Component } from 'react';

import './image-slider.css';

import slide01 from '../../assets/images/slide01.jpg';
import slide02 from '../../assets/images/slide02.jpg';
import slide03 from '../../assets/images/slide03.jpg';
import slide04 from '../../assets/images/slide04.jpg';

export default class ImageSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sliders: [
                slide01,
                slide02,
                slide03,
                slide04
            ],
            index: 0
        }
    }

    handleNext = () => {
        let totalSlider = this.state.sliders.length-1;
        let index = this.state.index;

        if(index < totalSlider){
            this.setState({
                index: this.state.index + 1
            });
        }

    }

    handlePrev = () => {
        let index = this.state.index;

        if(index > 0){
            this.setState({
                index: this.state.index - 1
            });
        }

    }

    render() {
        const { sliders, index } = this.state;

        return (

            <div className="cp-image-slider">
                <div className="cp-image-slider__box-btns">
                    <button className="cp-image-slider__btn-prev" onClick={this.handlePrev}>Prev</button>
                    <button className="cp-image-slider__btn-next" onClick={this.handleNext}>Next</button>
                </div>
                <img className="cp-image-slider__image" src={sliders[index]} />
            </div>

        )
    }

}
