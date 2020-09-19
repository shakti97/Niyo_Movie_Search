import React, { useState } from "react";

const typeArray = ["All", "Movie", "Series", "Episode"];

function SearchBox({ searchMovie }) {
  const [searchValue, setSearchValue] = useState("");
  const [type, setType] = useState("All");
  return (
    <div className="mt-4 mb-4">
      <div className="form-group row d-flex justify-content-center">
        <div className="col-md-4 pr-0">
          <input
            type="text"
            className="form-control"
            name="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            id="searchId"
            placeholder="Search For Movies here"
          />
        </div>
        <div className="col-md-2 pl-0">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {type.toUpperCase()}
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              onClick={(e) => {
                setType(e.target.innerText);
              }}
            >
              {typeArray.map((element) => {
                return (
                  <div
                    className={
                      element.toLowerCase() === type.toLowerCase()
                        ? "active dropdown-item"
                        : "dropdown-item"
                    }
                    name={element}
                  >
                    {element.toUpperCase()}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-md-1">
          <button
            type="button"
            name=""
            id=""
            class="btn btn-primary"
            onClick={() => searchMovie(searchValue, type)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
