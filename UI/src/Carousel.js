import React from 'react';
import './Carousel.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Carousel = () => {
    return (
        <div id="main-slider-container">
            <MdChevronLeft size={40} className='slider-icon left'/>
            <div id='slider'>

            </div>
            <MdChevronRight size={40} className='slider-icon right'/>


        </div>
    )
}

export default Carousel;