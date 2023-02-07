import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnewHope from "../../public/imgs/ANewHope.jpg";
import AttackoftheClones from "../../public/imgs/AttackoftheClones.jpg";
import EmpireStrikesBack from "../../public/imgs/EmpireStrikesBack.jpg";
import ReturnoftheJedi from "../../public/imgs/ReturnoftheJedi.jpg";
import RevengeoftheSith from "../../public/imgs/RevengeoftheSith.jpg";
import ThePhantomMenace from "../../public/imgs/ThePhantomMenace.jpg";
import "./filmDetail.css";
import { useHistory } from "react-router-dom";

const filmImgMap = {
  "A New Hope": AnewHope,
  "The Empire Strikes Back": EmpireStrikesBack,
  "Return of the Jedi": ReturnoftheJedi,
  "Revenge of the Sith": RevengeoftheSith,
  "The Phantom Menace": ThePhantomMenace,
  "Attack of the Clones": AttackoftheClones
};

function FilmDetail() {
  const [currentFilmDetail, setFilm] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(`https://swapi.dev/api/films/${id}`)
      .then((res) => res.json())
      .then((data) => setFilm(data));
  };

  const imgSrc = currentFilmDetail && filmImgMap[currentFilmDetail.title];

  return (
    <div className="film">
      <div className="film-intro">
        <img
          className="film-backdrop"
          src={`../../imgs/film${id}.jpg`}
          alt="../../imgs/film6.jpg"
        />
      </div>
      <div className="film-detail">
        <div className="film-detailLeft">
          <div className="film-posterBox">
            <img className="film-poster" src={imgSrc} alt="" />
          </div>
        </div>
        <div className="film-detailRight">
          <div className="film-detailRightTop">
            <div className="film-name">
              {currentFilmDetail ? currentFilmDetail.title : ""}
            </div>
            <div className="film-episode">
              Episode: {currentFilmDetail ? currentFilmDetail.episode_id : ""}
            </div>
            <div className="film-director">
              Director: {currentFilmDetail ? currentFilmDetail.director : ""}
            </div>

            <div className="film-release">
              Release: {currentFilmDetail ? currentFilmDetail.release_date : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Opening</div>
            <div>
              {currentFilmDetail ? currentFilmDetail.opening_crawl : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;
