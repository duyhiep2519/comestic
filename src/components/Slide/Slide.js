import React, { useState } from "react";
import "./Slide.css";

const Slide = (props) => {
  const [current, setCurrent] = useState(0);
  const images = props.image;

  const handleNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const handlePrev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  if (!images) {
    return null;
  }

  return (
    <section className="slider">
      <span className="slide-btn-prev" onClick={handlePrev}>
        <i className="fas fa-chevron-circle-left"></i>
      </span>
      <span className="slide-btn-next" onClick={handleNext}>
        <i className="fas fa-chevron-circle-right"></i>
      </span>
      {images.map((img, index) => {
        return (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={`http://localhost:8888/${img}`}
                alt="img"
                className="slide-img"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slide;
