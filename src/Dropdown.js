import style from "./App.module.css";
import { useState } from "react";
function Dropdown() {
  const [isShowClass, setIsShowClass] = useState(false);
  let movieArray = [
    "Iron Man ",
    "Iron Man 2",
    "Thor",
    "Loki",
    "The Incredible Hulk ",
    "Captain America: The First Avenger ",
    "The Avengers ",
    "Iron Man 3 ",
    "Thor: The Dark World ",
    "Captain America: The Winter Soldier ",
    "Guardians of the Galaxy ",
  ];
  function printTheMovie(movie) {
    console.log(movie);
  }
  const movielist = movieArray.map((movie) => (
    <span key={movieArray.indexOf(movie)} onClick={() => printTheMovie(movie)}>
      {movie}
    </span>
  ));
  function myFunction() {
    setIsShowClass(!isShowClass);
  }
  //   Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      setIsShowClass(false);
    }
  };
  let showclassvariable = isShowClass
    ? `${style.dropdown_content} ${style.show}`
    : style.dropdown_content;
  return (
    <div className={style.mainContaintWrap}>
      <p className={style.Heading}>
        Choose ur Favouritre Movies from the list below
      </p>
      <div className={style.dropdown}>
        <button
          className={style.dropbtn}
          onMouseEnter={myFunction}
          onClick={myFunction}
        >
          Dropdown
        </button>
        <div id="myDropdown" className={showclassvariable} onClick={myFunction}>
          {movielist}
        </div>
      </div>
      {/* // */}
    </div>
  );
}

export default Dropdown;
