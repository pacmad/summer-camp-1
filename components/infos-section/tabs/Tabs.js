import React from "react";

export default function Tabs({ t }) {
  return (
    <div className="tabs">
      <h2>{t("title-3")}</h2>
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
            {t("quand")}
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
            Où
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
            {t("hebergement")}
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
            {t("repas")}
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
            Trasport
          </button>
        </div>
        <div className="tab-content text-primary mt-3" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-when"
            role="tabpanel"
            aria-labelledby="v-pills-when-tab"
          >
            <p>At least one week between June 15th to September 15th</p>
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
            <p>
              Accommodation Mostly all solidarity workcamps will proposed you an
              accommodation in a tent, mobile-home or in a collective room.
              However, there are some solidarity workcamps that doesn’t proposed
              accommodation. Those ones are mostly proposed to the local youth.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-meal"
            role="tabpanel"
            aria-labelledby="v-pills-meal-tab"
          >
            <p>
              You will share the meals offered with the people hosted in Emmaus,
              the volunteers, the workers, and the other youths from the
              solidarity workcamps.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-transport"
            role="tabpanel"
            aria-labelledby="v-pills-transport-tab"
          >
            <p>
              You will have to bear all the costs linked to your travel to the
              Emmaus solidarity workcamp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
