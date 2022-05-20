import React from 'react';
import './Carousel.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Carousel =(props)=>{
    const slides = [{image: 'SCimg.jpeg/200/300', title: 'This is a title', description: 'This is a description'}];

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
                        <div className='slider-card' key={index}>
                            <div className='slider-card-image'></div>
                            <p className='slider-card-title'>{slide.title}</p>
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