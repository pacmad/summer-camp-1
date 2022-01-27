import React from "react";

export default function HeaderTitre() {
  return (
    <div className="p-5 header-titre text-center shadow ">
      <h1 className="display-5">
        Chantier d'été Emmaüs Une Expérience intense qui a du sens!
      </h1>
      <p>Ensemble, vivez une expérience collective et solidaire forte !</p>
      <a href="#" className="btn btn-primary text-light m-1">
        Décourvir le chanier d'été <i class="fas fa-angle-right"></i>
      </a>
      <a href="#" className="btn btn-secondary m-1">
        Inscription <i class="fas fa-angle-right"></i>
      </a>
    </div>
  );
}
