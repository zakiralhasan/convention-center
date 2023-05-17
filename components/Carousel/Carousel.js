"use client"

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useState } from "react";
import { imageData } from "@/helpers/image-data";

const Carousel = () => {
    let [currentImg, setCurrentImg] = useState(0)

    //below function used for handling right arrow button
    const handleRightArrow = () => {
        setCurrentImg(currentImg += 1)
        if (currentImg === 5) {
            setCurrentImg(currentImg = 0)
        }
    }

    //below function used for handling left arrow button
    const handleLeftArrow = () => {
        setCurrentImg(currentImg -= 1)
        if (currentImg === -1) {
            setCurrentImg(currentImg = 4)
        }
    }


    return (
        <>
            <div className="carousel-container">
                <div className="carousel-img-container"
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),url(${imageData[currentImg]?.img.src})` }}>
                </div>
                <SlArrowLeft className="carosuel-left-arrow" onClick={handleLeftArrow} />
                <SlArrowRight className="carosuel-right-arrow" onClick={handleRightArrow} />

                <div className="carousel-title-container">
                    <h3>{imageData[currentImg]?.title}</h3>
                    <p>{imageData[currentImg]?.subTitle}</p>
                    <button>Book Now</button>
                </div>
            </div>
        </>
    );
};

export default Carousel;