import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../Constants.json";

export default function Banks({ params }) {
  const [isSearching, setSearching] = useState(false);
  const [error, setError] = useState("");
  const [movieDetail, setMovieDetail] = useState({
    Poster: "",
    Title: "",
    Director: "",
    Released: "",
  });
  const { id } = useParams();

  useEffect(() => {
    setSearching(true);
    async function fetchData() {
      let url = `${BASE_URL}?apikey=7d4be86d&i=${id}`;
      try {
        const response = await Axios.get(url);
        console.log(response);
        if (response.data.Error) {
          setError(response.data.Error);
          return;
        }
        setMovieDetail(response.data);
        setSearching(false);
      } catch (err) {
        alert(err.response);
        setSearching(false);
        console.log(err);
      }
    }
    fetchData();
  }, [id]);

  if (error) {
    return (
      <div className="100vh d-flex justify-content-center align-self-center">
        {error}
      </div>
    );
  }

  return (
    <div className="ml-5 mr-5 banks">
      {isSearching ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <img className="image" src={movieDetail.Poster} alt="Movie" />
          <div className="body">
            <h5 className="title h-25">{movieDetail.Title}</h5>
            <div className="row">
              <div className="col-md-3">
                <div>Director</div>
                <div>{movieDetail.Director}</div>
              </div>
              <div className="col-md-3">
                <div>Released</div>
                <div>{movieDetail.Released}</div>
              </div>
              <div className="col-md-3">
                <div>Box Office</div>
                <div>{movieDetail.BoxOffice}</div>
              </div>
              <div className="col-md-3">
                <div>Production</div>
                <div>{movieDetail.Production}</div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">{movieDetail.Plot}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
