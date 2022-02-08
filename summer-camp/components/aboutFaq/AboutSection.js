import React from "react";

export default function AboutSection() {
  return (
    <div className="about-section container rounded">
      {/* SECTION 1 */}
      <h1>À propos de chantier d'été</h1>
      <p className="about-p">On est en droit de se poser la question…</p>
      <div className="section-1">
        <div className="row">
          <div className="col-md-7">
            <h4>
              Un peu d'histoire ! C’est solide, c’est sûr, mais question finesse
              d’esprit, on repassera.
            </h4>
            <p>
              Emmaüs France ?? L’histoire d’Emmaüs En 1949, Henri Groues dit
              l’abbé Pierre, restaure une maison dans laquelle il vivait. Cette
              maison, lieu de rencontres, devient une auberge de jeunesse
              internationale qu’il baptise « Emmaüs ». Le mouvement Emmaüs naît
              de cette initiative dont le but est « d’agir pour que chaque
              homme, chaque société, chaque nation puisse vivre, s’affirmer et
              s’accomplir dans l’échange et le partage, ainsi que dans une égale
              dignité ». L’association Emmaüs est créée en 1953 pour organiser
              et développer ce mouvement. Après les ravages de la guerre de
              1939-45, les rigueurs de l’hiver 1954 tuent. Dans ce contexte de
              grave pénurie de logements, l’abbé Pierre lance son célèbre appel,
              « Mes amis, au secours » ; il déclenche « l’insurrection de la
              Bonté » et influence fortement les pouvoirs publics. Un immense
              mouvement de solidarité naît : l’appel rapportera 500 millions de
              francs en dons. Les jours suivants voient la création de
              nombreuses structures au sein d’Emmaüs et l’émergence progressive
              des Communautés Emmaüs (117 en France). En 1985 est créée
              l’association Emmaüs France, qui regroupe alors tous les groupes
              Emmaüs français.
            </p>
            <p>
              En avril 1983, la communauté de Strasbourg envoie 1 salarié et 3
              compagnons à Scherwiller afin d’y accueillir pour la saison
              estivale un chantier d’été. Le groupe s’installe à l’Alumnat
              Ste-Odile, ancienne école privée, propriété des Pères
              Assomptionnistes. À la fin de l’été, au lieu de revenir à
              Strasbourg ils restent à Scherwiller avec l’accord des Pères
              Assomptionnistes. Le lieu devient une annexe de la communauté de
              Strasbourg.
            </p>
            <p>
              Bon, on va prendre une autre phrase. D’autant plus que c’est pas
              top de se comparer à des briques. C’est solide, c’est sûr, mais
              question finesse d’esprit, on repassera.
            </p>
          </div>
          <div className="col-md-5">
            <img
              class="rounded img-fluid shadow "
              src="../../images/emmaus1.jpg"
              alt="emmaus-scherwiller"
            />
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section-2 text-center">
        <h2>BON.</h2>
        <h5>On reprend tout depuis le début, et on va le faire simple.</h5>
        <p>
          Aujourd'hui Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur quas, reprehenderit ipsa dignissimos corrupti nisi ipsam
          consectetur. Eligendi, a nisi.
        </p>
        <h5>Une Expérience intense qui a du sens!</h5>
        <p>En fait, on aurait dû commencer par là…</p>
        <img
          className="img-fluid rounded shadow mt-3 w-75 "
          src="../../images/emmaus9.jpg"
          alt="chantier-ete-emmaus"
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
