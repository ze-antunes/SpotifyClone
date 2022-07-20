import React from "react";


function Card({ cover, songName, albumName, artist, idLink, owner }) {
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
            <a className="imformation-link" href={`/playlist/${idLink}`}>
              {songName}
              {albumName}
            </a>
          </h4>
          <p className="imformation-artist">
            {artist}
            {owner}
          </p>
        </div>
      </article>
    </div>
  );
}

export default Card;
