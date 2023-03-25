import React from "react";
import "./_row.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";
import { actionGetMoviesDetailAPI } from "../../Redux/Action/MovieAction";

function Row(props) {
  const { title, list, path } = props;
  const dispatch = useDispatch();

  const handleMovies = (item) => {
    if (item.media_type === "movie") {
      dispatch(actionGetMoviesDetailAPI(item.id));
      //   dispatch(actionGetSimilarMoviesAPI(item.id));
      //   dispatch(actionMoviesCreditsAPI(item.id));
      //   dispatch(actionMoviesVideosAPI(item.id));
    }
    if (item.media_type === "tv") {
      //   dispatch(actionGetTVDetailListAPI(item.id));
      //   dispatch(actionGetSimilarTVAPI(item.id));
      //   dispatch(actionTVCreditsAPI(item.id));
      //   dispatch(actionTVVideosAPI(item.id));
    }
  };
  return (
    <div className="row">
      <div className="row-container">
        <div className="row-heading">
          <h3 className="row-title text-normal">{title}</h3>
        </div>
        <div className="row-items">
          {list &&
            list.length > 0 &&
            list.map((item) => (
              <Link
                className="row-item"
                key={item.id}
                onClick={() => handleMovies(item)}
                to={`/${path}/${item.id}`}
              >
                <img
                  className="row-item-image"
                  src={
                    `https://image.tmdb.org/t/p/original${item.poster_path}` ||
                    require("../../assets/img/PictureNotAvailable.png")
                  }
                  alt="poster"
                ></img>
                <span className="row-item-title">
                  {item.title || item.name}
                </span>
                <span className="row-item-rating">
                  <HiStar style={{ fontSize: "16px" }} />
                  <span>{Math.floor(item.vote_average * 10) / 10}</span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Row;
