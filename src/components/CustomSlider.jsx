import React, { useState, useEffect } from "react";
import "./Custom-Slider.scss";
import Button from "./Button";
import TextSlideUp from "../effects/TextSlideUp";
import TextFadeIn from "../effects/TextFadeIn";

const slides = [
  {
    title: "Low-Code Cloud",
    text: "Deploy applications without any code. Conucle lets you setup your entire digital infrastructure without writing any complex scripts.",
    imgSrc: "assets/banner-1.png",
    buttonText: "Explore Now",
  },
  {
    title: "Built For Time Sensitive Computing",
    text: "With our AI-Powered performance management, we ensure that our cloud can be relied upon for time and computational sensitivity.",
    imgSrc: "assets/banner-2.png",
    buttonText: "Explore Now",
  },
  {
    title: "Become a Partner",
    text: "Unlock new revenue opportunities by joining our partnership network. Collaborate with us to expand your reach and drive growth through tailored revenue-sharing models. Be a part of upcoming low-code transformation.",
    imgSrc: "assets/banner-3.png",
    buttonText: "Explore Now",
  },
];

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-section">
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <div className="text-content">
              <h1>
                <TextSlideUp>{slide.title}</TextSlideUp>
              </h1>
              <p>
                <TextFadeIn defaultValue={slide.text} />
              </p>
              <Button text="Start Free Trial" />
            </div>
            <div className="image-content">
              <img src={slide.imgSrc} alt="Slide Image" />
            </div>
          </div>
        ))}
      </div>
      <div className="dots-container-1">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active-dot" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
