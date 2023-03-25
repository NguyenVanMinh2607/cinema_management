import React, { useState } from "react";
import { useSelector } from "react-redux";
import Row from "../../Component/Home/Row";
import { ToastContainer, toast } from "react-toastify";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";
import Trailer from "../../Component/trailer/Trailer";
import Credits from "../../Component/credits/Credits";
import TableDetail from "../../Component/table-detail-desc/TableDetail";
import PosterRating from "../../Component/poster-rating/PosterRating";

function MoviesItem(props) {
  const state = useSelector((state) => state);
  const moviesDetail = state.movieReducer.moviesDetail;
  const similarMoviesList = state.movieReducer.similarMoviesList;
  const moviesCredits = state.movieReducer.moviesCredits;
  const moviesVideos = state.movieReducer.moviesVideos;
  const [like, setLike] = useState(false);

  const handleLike = () => {
    toast.success("Add to wishlist !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setLike(true);
  };
  const handleUnLike = () => {
    toast.error("Remove from wishlist !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setLike(false);
  };
  console.log(moviesDetail);
  //   console.log(similarMoviesList);
  //   console.log(moviesCredits);
  //   console.log(moviesVideos);

  return (
    <div>
      <div className="item">
        <div className="item-poster">
          <img
            src={
              moviesDetail.backdrop_path !== null
                ? `https://image.tmdb.org/t/p/original${moviesDetail.backdrop_path}`
                : `https://image.tmdb.org/t/p/original${moviesDetail.poster_path}`
            }
            alt="backdrop_path"
            className="item-poster-image"
          />
        </div>

        <div className="item-content">
          {/* <PosterRating detail={moviesDetail} /> */}
          <div className="item-content-detail">
            <h2 className="item-content-detail-title">
              {moviesDetail.title || moviesDetail.name}
            </h2>
            <span className="item-content-detail-originalTitle">
              Original title: "{moviesDetail.original_title}"
            </span>
            <div className="item-content-detail-btn">
              {!like ? (
                <>
                  <span
                    className="item-content-detail-bookmark"
                    onClick={handleLike}
                  >
                    <AiOutlineHeart />
                  </span>
                  <ToastContainer />
                </>
              ) : (
                <>
                  <span
                    className="item-content-detail-bookmark"
                    onClick={handleUnLike}
                  >
                    <AiFillHeart />
                  </span>
                  <ToastContainer />
                </>
              )}
              <a
                href={moviesDetail.homepage}
                target="_blank"
                rel="noreferrer"
                className="item-content-detail-link"
              >
                <HiOutlineLink />
              </a>
            </div>
            <div className="">
              <h3 className="item-content-detail-heading">Description</h3>
              <p className="item-content-detail-overview">
                "{moviesDetail.overview}"
              </p>
              <span className="item-content-detail-tagline">
                "{moviesDetail.tagline}"
              </span>
            </div>

            <TableDetail detail={moviesDetail} />
            {/* <Credits detail={moviesCredits} credits={moviesCredits} /> */}
            <Trailer videos={moviesVideos} />
          </div>
        </div>

        {/* <Reviews detail={moviesDetail} /> */}

        {similarMoviesList && similarMoviesList.length >= 1 && (
          <Row
            list={similarMoviesList}
            title="You might also like"
            path="movies"
            className="item-similar"
          />
        )}
      </div>
    </div>
  );
}

export default MoviesItem;
