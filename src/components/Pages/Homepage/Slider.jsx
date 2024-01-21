import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import sliderData from "./SliderData";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Blurhash } from "react-blurhash";
import '../../../css/Carousel.css'

export default function Slider() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(new Array(sliderData.length).fill(false));

  const slideLength = sliderData.length
  const autoScroll = true
  let slideInterval;
  let intervalTime = 5000 

  const nextSlide = () =>{
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  // Loading images with Blurhash
  const handleImageLoad = (index) => {
    const loadedImages = [...imageLoaded];
    loadedImages[index] = true;
    setImageLoaded(loadedImages);
  };

  useEffect(() => {
    const loadImage = (index) => {
      const img = new Image();
      img.onload = () => {
        handleImageLoad(index);
      };
      img.src = sliderData[index].image;
    };

    if (!imageLoaded[currentSlide]) {
      loadImage(currentSlide);
    }
  }, [currentSlide, imageLoaded, sliderData]);

  // Reset imageLoaded when the slide changes
  useEffect(() => {
    setImageLoaded(new Array(slideLength).fill(false));
  }, [currentSlide, slideLength]);

  //Slider begins at first slide on refresh
  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime)
  }
  //Auto Scroll
  useEffect(()=>{
    if(autoScroll){
        auto()
    }
    return () => {
        clearInterval(slideInterval)
    }
  },[currentSlide])

  function handleClick(){
    console.log("Button was clicked");
  }

  const getCaptionClassName = (index) => {
    const classNames = {
      0: 'caption1',
      1: 'caption3',
      2: 'caption4',
    };
    return classNames[index] || '';
  };

  return (
    <div className="slider">
      <div className="arrows">
        <FaArrowAltCircleLeft onClick={prevSlide} />
        <FaArrowAltCircleRight onClick={nextSlide} />
      </div>

      {sliderData.map((slide, index) => {
        const { image, caption, link, blurhash } = slide;
        return (
          <div
            key={slide.id}
            className={index === currentSlide ? 'slide current' : 'slide'}
          >
            {index === currentSlide && (
              <div className="slides">
                <div className="slider-img">
                {imageLoaded[index] ? (
                  <img src={image} alt="Slide" />                  
                  ) : (
                    <Blurhash
                      hash={blurhash}
                      width="100%"
                      height="100%"
                      resolutionX={32}
                      resolutionY={32}
                      punch={1}
                    />
                  )}
                </div>
                <div className={getCaptionClassName(index)}>
                  <h3>{caption.heading}</h3>
                  <h4>{caption.subheading}</h4>
                  <Link to={link.url}><button onClick={handleClick}>{link.text} <span className='btn-carousel'>&rarr;</span></button></Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
