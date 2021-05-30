import React from "react";

import arrowRight from "../../assets/svgs/angle-left-solid.svg";
import arrowLeft from "../../assets/svgs/angle-right-solid.svg";

import "./carouselControl.css";
function CarouselControl(props) {
  return (
    <div
      className={
        props.mode === "vertical"
          ? "container-carousel-control vertical"
          : "container-carousel-control horizontal"
      }
    >
      Mortal kombat <span className="item-divider"></span>
      <span className="bottom-carousel-control">
        <span className="cont-container">{props.value} / 2</span>
        <span className="arrows-container">
          <img src={arrowRight} onClick={() => props.onChangeRight()} />
          <img src={arrowLeft} onClick={() => props.onChangeLeft()} />
        </span>
      </span>
    </div>
  );
}

export default CarouselControl;
