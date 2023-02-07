import React from "react";
import "./filmCard.css";
import AnewHope from "../../public/imgs/ANewHope.jpg";
import AttackoftheClones from "../../public/imgs/AttackoftheClones.jpg";
import EmpireStrikesBack from "../../public/imgs/EmpireStrikesBack.jpg";
import ReturnoftheJedi from "../../public/imgs/ReturnoftheJedi.jpg";
import RevengeoftheSith from "../../public/imgs/RevengeoftheSith.jpg";
import ThePhantomMenace from "../../public/imgs/ThePhantomMenace.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

library.add(faTrashCan);

const filmImgMap = {
  "A New Hope": AnewHope,
  "The Empire Strikes Back": EmpireStrikesBack,
  "Return of the Jedi": ReturnoftheJedi,
  "Revenge of the Sith": RevengeoftheSith,
  "The Phantom Menace": ThePhantomMenace,
  "Attack of the Clones": AttackoftheClones
};

function FilmCard({ id, film, deleteFilm }) {
  const imgSrc = film && filmImgMap[film.title];
  id++;

  return (
    <div className="filmCard">
      <Link
        to={`/film/${id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <img className="film-img" src={imgSrc} alt="4" />
      </Link>
      <div className="delete-btn" onClick={() => deleteFilm(film.title)}>
        <FontAwesomeIcon icon="fa-solid fa-trash-can" />
      </div>
    </div>
  );
}

export default FilmCard;
