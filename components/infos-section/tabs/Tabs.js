import React from "react";

export default function Tabs({ t }) {
  return (
    <div className="tabs">
      <h2>{t("title-3")}</h2>
      <p>Comment venir ?</p>
      <div className="d-md-flex bg-info rounded p-5 shadow">
        <div
          className="nav flex-md-column nav-pills me-3 pe-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link text-end active "
            id="v-pills-when-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-when"
            type="button"
            role="tab"
            aria-controls="v-pills-when"
            aria-selected="true"
          >
            {t("quand")} <i class="fa-solid fa-calendar-check"></i>
          </button>
          <button
            className="nav-link text-end"
            id="v-pills-where-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-where"
            type="button"
            role="tab"
            aria-controls="v-pills-where"
            aria-selected="true"
          >
            Où <i class="fa-solid fa-location-dot"></i>
          </button>
          <button
            className="nav-link text-end"
            id="v-pills-stay-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-stay"
            type="button"
            role="tab"
            aria-controls="v-pills-stay"
            aria-selected="false"
          >
            {t("hebergement")} <i class="fa-solid fa-campground"></i>
          </button>
          <button
            className="nav-link text-end"
            id="v-pills-meal-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-meal"
            type="button"
            role="tab"
            aria-controls="v-pills-meal"
            aria-selected="false"
          >
            {t("repas")} <i class="fa-solid fa-burger"></i>
          </button>
          <button
            className="nav-link text-end"
            id="v-pills-transport-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-transport"
            type="button"
            role="tab"
            aria-controls="v-pills-transport"
            aria-selected="false"
          >
            Trasport <i class="fa-solid fa-plane-departure"></i>
          </button>
        </div>
        <div className="tab-content text-primary mt-3" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-when"
            role="tabpanel"
            aria-labelledby="v-pills-when-tab"
          >
            <p>
              1 semaine minimum et 2 semmaine maximum du 01 juin au 01
              septembre.
            </p>
          </div>
          <div
            className="tab-pane fade show"
            id="v-pills-where"
            role="tabpanel"
            aria-labelledby="v-pills-where-tab"
          >
            <p>Scherwiller</p>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-stay"
            role="tabpanel"
            aria-labelledby="v-pills-stay-tab"
          >
            <p>Cette année nos campers seront logés à l’hôtel.</p>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-meal"
            role="tabpanel"
            aria-labelledby="v-pills-meal-tab"
          >
            <p>La communauté de Emmaüs</p>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-transport"
            role="tabpanel"
            aria-labelledby="v-pills-transport-tab"
          >
            <p>à ta charge</p>
          </div>
        </div>
      </div>
    </div>
  );
}
