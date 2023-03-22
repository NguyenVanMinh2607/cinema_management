import React from "react";
import "./_header.scss";

function header(props) {
  return (
    <>
      <div className="bg-dark tix-bg">
        <div className="container pt-4 pb-4">
          <div className="text-content">
            <h1 className="mb-3 text-white">In Theaters</h1>
          </div>
          <div className="text-white mt-0 description">
            <p>
              List of all latest movies nearby, for you to watch this weekend
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default header;
