import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { compDarkRGB, compLightRGB } from "../utils/colorUtilFunc";
import "./ImageContainer.css";

function ImageContainer({ item, index, isLast, state, dispatch }) {
  const triggerRef = useRef(null);
  const imgRef = useRef(null);
  useIntersectionObserver(state, dispatch, triggerRef, isLast);

  return (
    <div
      ref={triggerRef}
      style={{
        "--media-background-text": item.text_color,
        "--media-background": item.background_color,
        "--media-text-dark": compDarkRGB(
          item.text_color,
          item.background_color
        ),
        "--media-text-light": compLightRGB(
          item.text_color,
          item.background_color
        ),
      }}
      className="media-container"
    >
      <div
        style={{
          height: `${
            (index + 1).toString().length <= 1
              ? ((index + 1).toString().length + 3) * 10 - 5
              : ((index + 1).toString().length + 2) * 10 - 5
          }px`,
          width: `${
            (index + 1).toString().length <= 1
              ? ((index + 1).toString().length + 3) * 10 - 5
              : ((index + 1).toString().length + 2) * 10 - 5
          }px`,
        }}
        className="rank circle"
      >
        <span className="hash">#</span>
        {index + 1}
      </div>
      <a
        className="image-container"
        href={`https://telegram.dog/c/1737847469/${item.key}`}
        target="_blank"
      >
        <img
          ref={imgRef}
          className="image hide"
          src={item.image_link}
          alt="no-image"
          onLoad={() => {
            imgRef?.current.classList.toggle("hide");
          }}
        />
        <div className="overlay">
          <div className="overlay-name">
            {item.alt_name !== "none" ? item.alt_name : null}
          </div>
          <div className="overlay-type">{item.type}</div>
        </div>
      </a>
      <a
        className="title"
        href={`https://telegram.dog/c/1737847469/${item.key}`}
        target="_blank"
      >
        {item.name !== "none" ? item.name : item.alt_name}
      </a>
    </div>
  );
}

export default ImageContainer;
