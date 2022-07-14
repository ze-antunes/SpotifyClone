import React from "react";

function Card() {
  return (
    <div>
      <article className="card">
        <img
          src="https://randomwordgenerator.com/img/picture-generator/53e0d34a4c53a814f1dc8460962e33791c3ad6e04e50744172297cd5914cc7_640.jpg"
          alt="bruh"
          className="card-image"
        />
        <div className="card-information">
          <h4 className="imformation-title">
            <a className="imformation-link" href="/portfolio">
              Bruh
            </a>
          </h4>
          <p className="imformation-description">
            Lamb of god
          </p>
        </div>
      </article>
    </div>
  );
}

export default Card;
