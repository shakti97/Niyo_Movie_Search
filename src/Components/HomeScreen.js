import Axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import { BASE_URL } from "../Constants.json";
import Content from "./Content";

export default function HomeScreen() {
  const [dataList, setDataList] = useState([]);
  const [error, setError] = useState("");
  const [isSearching, setSearching] = useState(false);
  const [favouriteList, setFavouriteList] = useState([]);

  const searchMovie = async (value, type) => {
    setError("");
    setSearching(true);
    let url = `${BASE_URL}?apikey=7d4be86d&t=${value}`;
    if (type.toLowerCase() !== "all") {
      url = `${url}&type=${type.toLowerCase()}`;
    }
    try {
      const response = await Axios.get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers": "*",
        },
      });
      console.log(response);
      if (response.data.Error) {
        setError(response.data.Error);
        return;
      }
      // To handle more than 1 movie response
      if (Array.isArray(response.data)) {
        setDataList([...response.data]);
      } else {
        setDataList([response.data]);
      }
      setSearching(false);
    } catch (err) {
      alert(err.response);
      setSearching(false);
      console.log(err);
    }
  };

  useEffect(() => {
    let movieList = JSON.parse(localStorage.getItem("movieList"));
    if (!movieList) {
      movieList = [];
    }
    setFavouriteList(movieList);
  }, []);

  const markFavourite = (movie) => {
    let movieList = JSON.parse(localStorage.getItem("movieList"));
    if (movieList) {
      let index = movieList.findIndex((element) => element.id === movie.imdbID);
      if (index >= 0) {
        movieList.splice(index, 1);
      } else {
        let extractMovieDetails = {
          id: movie.imdbID,
          Title: movie.Title,
          Poster: movie.Poster,
          Director: movie.Director,
          Released: movie.Released,
        };
        movieList.push(extractMovieDetails);
      }
    } else {
      movieList = [
        {
          id: movie.imdbID,
          Title: movie.Title,
          Poster: movie.Poster,
          Director: movie.Director,
          Released: movie.Released,
        },
      ];
    }
    localStorage.setItem("movieList", JSON.stringify(movieList));
    setFavouriteList(movieList);
  };
  return (
    <div>
      <SearchBox searchMovie={searchMovie} />
      {isSearching ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Content
          movieList={dataList}
          error={error}
          markFavourite={markFavourite}
          favouriteList={favouriteList}
        />
      )}
    </div>
  );
}
