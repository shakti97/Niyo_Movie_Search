import React, { useEffect, useState } from "react";
import MovieSummaryBox from "./MovieSummaryBox";

function Favourite(props) {
  const [favouriteList, setFavouriteList] = useState([]);

  useEffect(() => {
    let movieList = JSON.parse(localStorage.getItem("movieList"));
    if (!movieList) {
      movieList = [];
    }
    setFavouriteList(movieList);
  }, []);

  const markUnFavourite = (movie) => {
    const movieList = [...favouriteList];
    let index = movieList.findIndex((element) => element.id === movie.id);
    if (index >= 0) {
      movieList.splice(index, 1);
    }
    localStorage.setItem("movieList", JSON.stringify(movieList));
    setFavouriteList(movieList);
    console.log("movieList ", movieList);
  };

  return (
    <div className="row">
      {favouriteList.map((movie, index) => {
        return (
          <div className="col-md-3 card p-0" key={index}>
            <MovieSummaryBox
              {...movie}
              {...props}
            />
            <button
              className="btn btn-primary "
              onClick={() => markUnFavourite(movie)}
            >
              UnFavourite
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Favourite;
