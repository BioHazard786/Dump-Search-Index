import React from "react";
import "./MediaCard.css";
import ImageContainer from "./ImageContainer";
import LoadingAnimation from "./LoadingAnimation";

function MediaCard({ state, dispatch }) {
  return (
    <div className="media-card">
      {state.data.length !== 0 ? (
        state.filteredData
          .slice(0, state.dataIndex)
          .map((item, index) => (
            <ImageContainer
              item={item}
              key={index}
              index={state.data.indexOf(item)}
              isLast={
                state.filteredData.slice(0, state.dataIndex).length - 1 ===
                index
              }
              state={state}
              dispatch={dispatch}
            />
          ))
      ) : (
        <LoadingAnimation />
      )}
      {state.loading && <LoadingAnimation />}
    </div>
  );
}

export default MediaCard;
