import React, { useState } from "react";
import "./Toolbar.css";

const Toolbar = () => {
  const [sort, setSort] = useState("Feature");
  return (
    <div className="toolbar">
      <div className="filter-sort">
        <label htmlFor="sort-by">Sort by</label>

        <input type="text" id="sort-by" value={sort} />

        <span>
          <i className="fas fa-sort"></i>
        </span>
      </div>
      <div className="show">
        <label htmlFor="show">Show</label>

        <input type="text" id="show" value={sort} />

        <span>
          <i className="fas fa-sort"></i>
        </span>
      </div>
    </div>
  );
};

export default Toolbar;
