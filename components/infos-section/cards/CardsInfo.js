import React from "react";

export default function CardsInfo({ t }) {
  return (
    <div className="my-5">
      <div className="row">
        <h2>{t("title-2")}</h2>
        <p>Une mission au coeur de l'écosystème solidaire d'Emmaüs !</p>
        <div className="col-md-4 my-3">
          <div className="card shadow h-100">
            <img
              className="card-img-top"
              src="./images/emmaus5.jpg"
              alt="solidarite"
            />
            <div className="card-body">
              <h4>{t("engagement")}</h4>
              <p className="card-text">{t("engagement-content")}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 my-3">
          <div className="card shadow h-100">
            <img
              className="card-img-top"
              src="./images/emmaus8.jpg"
              alt="solidarite"
            />
            <div className="card-body">
              <h4>{t("decouverte")}</h4>
              <p className="card-text">{t("decouverte-content")}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 my-3">
          <div className="card shadow h-100">
            <img
              className="card-img-top"
              src="./images/summer4.jpg"
              alt="solidarite"
            />
            <div className="card-body">
              <h4>{t("rencontres")}</h4>
              <p className="card-text">{t("rencontres-content")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
