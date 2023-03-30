import React from "react";
import { FaTags, FaTimes } from "react-icons/fa";
import "./SubSearch.css";

function SubSearch({ searchItem, updateQuery }) {
  return (
    <div className="sub-search">
      <FaTags className="tags-icon" />
      <div className="sub-search-container">
        <span className="sub-search-text">Search: {searchItem}</span>
        <FaTimes className="sub-cross-icon" onClick={() => updateQuery("")} />
      </div>
    </div>
  );
}

export default SubSearch;
