import React, { useState, useEffect } from "react";
import "./search.css";

function Search({ searchData }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let timeout;
    if (searchTerm) {
      timeout = setTimeout(() => {
        searchData(searchTerm);
      }, 500);
    } else {
      searchData("");
    }
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <div className="wrapper">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
}

export default Search;
