import React from "react";
import "./LoadingAnimation.css";

function LoadingAnimation() {
  const randomArray = (length, max) =>
    [...new Array(length)].map(() => Math.round(Math.random() * max));

  const randomMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return randomMap.map((_, index) => {
    return (
      <div className="loading-animation" key={index}>
        <div className="loading-cover"></div>
        <div className="loading-title"></div>
      </div>
    );
  });
}

export default LoadingAnimation;
