import React from 'react';
import './Carousel.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Carousel =(props)=>{
    const slides = [1, 2, 3, 4, 5];

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;

    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
        
    }

    return (
        <div id="main-slider-container">
            <MdChevronLeft size={40} className='slider-icon left' onClick={slideLeft}/>
            <div id='slider'>
               {
                slides.map((slide, index)=>{
                    return(
                        <div className='slider-card'>
                            <div className='slider-card-image'></div>
                            <p className='slider-card-title'>Card Title</p>
                            <p className='slider-card-description'>Card Description</p>
                        </div>
                    )
                })
            }
            </div>
            <MdChevronRight size={40} className='slider-icon right' onClick={slideRight}/>
        </div>
    )
}

export default Carousel;