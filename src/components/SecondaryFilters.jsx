import React from "react";
import "./SecondaryFilters.css";
import SubSearch from "./SubSearch";
import ThemeSwitcher from "./ThemeSwitcher";

function SecondaryFilters({ query, updateQuery }) {
  return (
    <div className="secondary-filters">
      {!query || <SubSearch searchItem={query} updateQuery={updateQuery} />}
      <ThemeSwitcher />
    </div>
  );
}

export default SecondaryFilters;
