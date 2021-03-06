import React from "react";
import CardsLoisir from "./CardsLoisir";
import CardsWork from "./CardsWork";

export default function CardActivity({ t }) {
  return (
    <div>
      <h2>{t("title-4")}</h2>
      <p>Engagement, expérience et découverte</p>
      <ul
        className="nav nav-tabs justify-content-center mb-3  "
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item " role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            {t("travail")}
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            {t("loisir")}
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <CardsWork />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <CardsLoisir />
        </div>
      </div>
    </div>
  );
}
