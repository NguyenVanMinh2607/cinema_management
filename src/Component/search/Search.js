import React from "react";
import { Link } from "react-router-dom";
import Error from "../../Component/error/Error";
import { HiStar } from "react-icons/hi";

const Search = ({
  path,
  searchList,
  searchKeyWords,
  onHandle,
  onHandlePageClick,
}) => {
  const handleMovies = (item) => {
    onHandle(item);
  };

  return (
    <div className="search">
      <div className="search-container">
        {searchList && searchList.length > 0 ? (
          <>
            <div className="search-items">
              {searchList.length > 0 &&
                searchList.map((item, idx) => (
                  <Link
                    className="search-item"
                    key={item.id}
                    onClick={() => handleMovies(item)}
                    to={`/${path}/${item.id}`}
                  >
                    <img
                      src={
                        item.poster_path !== null &&
                        item.poster_path !== undefined
                          ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                          : require("../../assets/img/PictureNotAvailable.png")
                      }
                      alt="poster"
                      className="search-item-image"
                    />
                    <span className="search-item-title">
                      {item.title || item.name}
                    </span>
                    <span className="search-item-rating">
                      <HiStar style={{ fontSize: "16px" }} />
                      <span>{item.vote_average.toFixed(1)}</span>
                    </span>
                  </Link>
                ))}
            </div>
          </>
        ) : (
          <Error searchKeyWords={searchKeyWords} />
        )}
      </div>
    </div>
  );
};

export default Search;
