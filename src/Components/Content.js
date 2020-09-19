import React from "react";
import MovieSummaryBox from "./MovieSummaryBox";

function Content({ movieList, error, markFavourite, favouriteList }) {
  const favouriteListIds = favouriteList.map(
    (favouriteMovie) => favouriteMovie.id
  );

  if (error) {
    return (
      <div className="100vh d-flex justify-content-center align-self-center">
        {error}
      </div>
    );
  }
  return (
    <div className="row ml-5 mr-5">
      {movieList.map((movie, index) => {
        return (
          <div className="col-md-3 card p-0" key={index}>
            <MovieSummaryBox {...movie} id={movie.imdbID} />
            <button
              className="btn btn-primary "
              onClick={() => markFavourite(movie)}
            >
              {favouriteListIds.includes(String(movie.imdbID))
                ? "UnFavourite"
                : "Favourite"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
