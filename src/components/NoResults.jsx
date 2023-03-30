import React from "react";
import "./NoResults.css";

function NoResults({ state }) {
  const noResults =
    state.filteredData.length === 0 &&
    !state.loading &&
    !(state.data.length === 0) ? (
      <div className="no-results-wrapper">
        <svg
          viewBox="0 0 176 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="no-results-emoji"
        >
          <path d="M12 12L62 62" className="marshmallow-emoji" />
          <path d="M62 12L12 62" className="marshmallow-emoji" />
          <path d="M114 12L164 62" className="marshmallow-emoji" />
          <path d="M164 12L114 62" className="marshmallow-emoji" />
          <path
            d="M26 160.615C59.2824 120.132 121.506 123.631 149 164.613"
            className="marshmallow-emoji marshmallow-emoji-face"
          />
        </svg>
        <div className="no-results">No Results</div>
      </div>
    ) : null;

  return noResults;
}

export default NoResults;
