import React from "react";
import { useState } from "react";
function Imageslide({slides}){
    const [currentIndex,setCurrentIndex]=useState(0)

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:`url(${slides[currentIndex].url})`,
        position:'relative'
      };
    function goToPrevious(){
        if (currentIndex === 0){
            setCurrentIndex(slides.length - 1)
        }
        else setCurrentIndex(currentIndex - 1)
  }
      function goToNext(){
            if (currentIndex === slides.length - 1){
                setCurrentIndex(0)
            }
            else setCurrentIndex(currentIndex + 1)
      }
      function goToSlide (slideIndex){
        setCurrentIndex(slideIndex);
      };
    return(
        <div className="sliderstyle">
             <div className="leftArrowStyles" onClick={goToPrevious} >  ❰</div>
            <div className="rightArrowStyles" onClick={goToNext}> ❱</div>

            
            <div style={slideStyles}></div>
            <div className="dotsContainerStyles">
        `   {slides.map((slide, slideIndex) => (
             <div className="dotStyle"  key={slideIndex} onClick={() => goToSlide(slideIndex)} >●</div>)
          )}
      </div>
        </div>
    )
}

export default Imageslide