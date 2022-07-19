import React from "react";


function Card({ cover, songName, albumName, artist }) {
  return (
    <div>
      <article className="card">
        <img
          src={cover}
          alt="bruh"
          className="card-image"
        />
        <div className="card-information">
          <h4 className="imformation-title">
            <a className="imformation-link" href="/">
              {songName}
              {albumName}
            </a>
          </h4>
          <p className="imformation-artist">
            {artist}
          </p>
        </div>
      </article>
    </div>
  );
}

export default Card;
