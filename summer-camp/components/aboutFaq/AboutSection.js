import React from "react";

export default function AboutSection() {
  return (
    <div className="about-section">
      {/* SECTION 1 */}
      <h1>Qui sommes nous ?</h1>
      <p>On est en droit de se poser la question…</p>
      <div className="section-1">
        <div className="row">
          <div className="col">
            <h4>
              C’est solide, c’est sûr, mais question finesse d’esprit, on
              repassera.
            </h4>
            <p>
              Bon, on va prendre une autre phrase. D’autant plus que c’est pas
              top de se comparer à des briques. C’est solide, c’est sûr, mais
              question finesse d’esprit, on repassera.
            </p>
          </div>
          <div className="col">
            <img
              class="rounded img-fluid shadow"
              src="../../images/emmaus1.jpg"
              alt="emmaus-scherwiller"
            />
          </div>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="section-2 text-center">
        <h2 className="display-2">BON.</h2>
        <p>
          On reprend tout depuis le début, et on va le faire simple, C'est en
          dce sens que cette école est unisue.
        </p>
        <img
          className="img-fluid rounded shadow "
          src="../../images/emmaus2.jpg"
          alt=""
        />
      </div>
      <h2>SI TOI AUSSI…</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, totam.
      </p>
      <button class="cta">
        <span>Je m'inscris</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </div>
  );
}
