import React from "react";
import { useHistory } from "react-router";

function MovieSummaryBox({ Poster, Director, Title, Released, id }) {
  const history = useHistory();
  return (
    <div onClick={() => history.push(`/banks/${id}`)}>
      <img className="card-img-top" src={Poster} alt="Movie" />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <div className="card-text row">
          <div className="col-md-6">
            <div>Director</div>
            <div>{Director}</div>
          </div>
          <div className="col-md-6">
            <div>Released</div>
            <div>{Released}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSummaryBox;
