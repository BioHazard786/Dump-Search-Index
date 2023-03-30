import React from "react";
import "./Search.css";
import { FaSearch, FaTimes } from "react-icons/fa";

function Search({ query, updateQuery }) {
  return (
    <div className="search-feild">
      <FaSearch className="search-icon" />
      <input
        type="text"
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
        placeholder="Search"
      />
      {!query || (
        <FaTimes className="cross-icon" onClick={() => updateQuery("")} />
      )}
    </div>
  );
}

export default Search;
