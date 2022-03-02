import React from "react";

export default function Tabs({ t }) {
  return (
    <div className="tabs">
      <h2>{t("title-3")}</h2>
      <div class="d-flex align-items-start bg-info  rounded  p-5 shadow ">
        <div
          className="nav flex-column nav-pills me-3 pe-3 border-end border-primary  "
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link  text-end active "
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            {t("quand")}
          </button>
          <button
            className="nav-link text-end"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            {t("hebergement")}
          </button>
          <button
            className="nav-link text-end"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            {t("repas")}
          </button>
          <button
            className="nav-link text-end"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Trasport
          </button>
        </div>
        <div className="tab-content text-primary" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <p>At least one week between June 15th to September 15th</p>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
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
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <p>
              You will share the meals offered with the people hosted in Emmaus,
              the volunteers, the workers, and the other youths from the
              solidarity workcamps.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
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
