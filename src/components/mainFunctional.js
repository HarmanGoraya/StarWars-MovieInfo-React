import React, { useState, useEffect } from "react";
import starwars from "../APIs/starwars";
import FilmCard from "./filmCard.js";
import "./mainFunctional.css";
import Search from "./search";

function MainFunctional() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  function sortData() {
    let sortedData = [...data];
    if (sortOrder === "asc") {
      sortedData = sortedData.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      setSortOrder("desc");
    } else {
      sortedData = sortedData.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      });
      setSortOrder("asc");
    }
    setData(sortedData);
  }

  function deleteFilm(title) {
    setData(data.filter((film) => film.title !== title));
    setOriginalData(originalData.filter((film) => film.title !== title));
  }

  function searchData(searchTerm) {
    if (!searchTerm) {
      setData(originalData);
      return;
    }
    const filteredData = originalData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  }

  useEffect(() => {
    starwars.getFilms().then((response) => {
      console.log("response", response);
      setOriginalData(response);
      setData(response);
    });
  }, []);

  return (
    <div className="App-1">
      <div className="search-container">
        <Search searchData={searchData} />
        <button className="button" onClick={sortData}>
          Sort
          {sortOrder === "asc" ? "" : ""}
        </button>
      </div>
      <div className="film-container">
        {data.map((item, index) => (
          <FilmCard id={index} film={item} deleteFilm={deleteFilm}></FilmCard>
        ))}
      </div>
    </div>
  );
}

export default MainFunctional;
