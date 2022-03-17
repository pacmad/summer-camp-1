import React from "react";
import Image from "next/image";

export default function AboutSection({ t }) {
  return (
    <div className="about-section container rounded">
      {/* SECTION 1 */}
      <h1> {t("title")}</h1>
      <p className="subtitle">On est en droit de se poser la question…</p>
      <div className="section-1">
        <h2>La mission </h2>
        <p>
          Les chantiers d’été Emmaüs sont l’occasion depuis des décennies de
          permettre à des jeunes de tous horizons de participer bénévolement, le
          temps d’une ou plusieurs semaines, aux activités des structures Emmaüs
          et de vivre une expérience humaine et solidaire enrichissante.
          Nourri.e.s et logé.e.s sur la durée de votre chantier, vous partagerez
          le quotidien des compagnons, des bénévoles et des salariés d'Emmaüs.
          Vous découvrirez les actions de solidarité menées par Emmaüs
          auxquelles vous contribuerez par votre participation bénévole. Les
          week-end, vous pourrez participer à des sorties organisées par Emmaüs.
          Nous vous préciserons les différents chantiers possibles via la
          messagerie de JeVeuxAider.gouv.fr. Une vingtaine de structures
          accueillent des chantiers de jeunes, un peu partout en France.
        </p>

        <div className="row my-5">
          <div className="col-md-8">
            <Image
              objectFit="cover"
              className="rounded"
              src="/images/strasbourg3.jpg"
              alt="emmaus-scherwiller"
              loading="lazy"
              width={800}
              height={250}
              layout="intrinsic"
            />
          </div>
          <div className="col-md-4">
            <Image
              objectFit="cover"
              className="rounded"
              src="/images/emmaus1.jpg"
              alt="emmaus-scherwiller"
              loading="lazy"
              width={400}
              height={250}
              layout="intrinsic"
            />
          </div>
        </div>
        {/* section-2 */}
        <div className="my-5">
          <h2>Chez nous !</h2>
          <p>
            À Emmaüs Scherwiller, aux côtés des compagnons, des bénévoles et des
            salariés Emmaüs, vous participerez à la collecte, au tri, à la
            valorisation et à la vente des dons. En dehors de ces activités
            liées aux missions de réemploi et d’insertion d’Emmaüs, des temps de
            partage collectifs seront proposés, lors des repas ou de sorties
            afin de tisser des liens avec les membres de la structure ainsi
            qu’avec les autres jeunes. Sur place, vous serez nourri.e.s et
            logé.s gratuitement : hébergé.e.s en tentes, durant votre séjour,
            vous aurez accès à des douches et sanitaires collectifs. Seuls les
            frais de transport pour venir jusqu'à la structure Emmaüs seront à
            votre charge. Les chantiers d'été sont organisés dans le respect des
            gestes barrières.
          </p>
        </div>
        <div>
          <h2 className="text-center my-5">
            Un peu d'histoire ! <br />
            C’est solide, c’est sûr, mais question finesse d’esprit, on
            repassera.
          </h2>
          <p>
            Emmaüs France ?? L’histoire d’Emmaüs En 1949, Henri Groues dit
            l’abbé Pierre, restaure une maison dans laquelle il vivait. Cette
            maison, lieu de rencontres, devient une auberge de jeunesse
            internationale qu’il baptise « Emmaüs ». Le mouvement Emmaüs naît de
            cette initiative dont le but est « d’agir pour que chaque homme,
            chaque société, chaque nation puisse vivre, s’affirmer et
            s’accomplir dans l’échange et le partage, ainsi que dans une égale
            dignité ». L’association Emmaüs est créée en 1953 pour organiser et
            développer ce mouvement. Après les ravages de la guerre de 1939-45,
            les rigueurs de l’hiver 1954 tuent. Dans ce contexte de grave
            pénurie de logements, l’abbé Pierre lance son célèbre appel, « Mes
            amis, au secours » ; il déclenche « l’insurrection de la Bonté » et
            influence fortement les pouvoirs publics. Un immense mouvement de
            solidarité naît : l’appel rapportera 500 millions de francs en dons.
            Les jours suivants voient la création de nombreuses structures au
            sein d’Emmaüs et l’émergence progressive des Communautés Emmaüs (117
            en France). En 1985 est créée l’association Emmaüs France, qui
            regroupe alors tous les groupes Emmaüs français.
          </p>
          <p>
            En avril 1983, la communauté de Strasbourg envoie 1 salarié et 3
            compagnons à Scherwiller afin d’y accueillir pour la saison estivale
            un chantier d’été. Le groupe s’installe à l’Alumnat Ste-Odile,
            ancienne école privée, propriété des Pères Assomptionnistes. À la
            fin de l’été, au lieu de revenir à Strasbourg ils restent à
            Scherwiller avec l’accord des Pères Assomptionnistes. Le lieu
            devient une annexe de la communauté de Strasbourg.
          </p>
          <p>
            Bon, on va prendre une autre phrase. D’autant plus que c’est pas top
            de se comparer à des briques. C’est solide, c’est sûr, mais question
            finesse d’esprit, on repassera.
          </p>
        </div>
      </div>
      {/* Go somewhrer video-yt */}
      <div className="row">
        <div className="col-md-6 my-1">
          <div class="card h-100 ">
            <div class="card-body">
              <h5>Découvrez l'association EMMAÜS FRANCE</h5>
              <p class="card-text">
                Fervent défenseur d’une société où chacun d’entre nous aurait sa
                place, Emmaüs développe des solutions originales pour trouver,
                avec les personnes victimes d’exclusion, des solutions qui les
                rendent à nou…
              </p>
              <a
                href="https://www.jeveuxaider.gouv.fr/organisations/5638-emmaus-france"
                class="btn btn-outline-primary"
              >
                En savoir plus
              </a>
            </div>
            <iframe
              height="250"
              src="https://www.youtube.com/embed/pB06AI5DA5M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className=" col-md-6 my-1">
          <div class="card h-100">
            <div class="card-body">
              <h5>Découvrez l'association EMMAÜS SCHERWILLER</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-outline-primary">
                En savoir plus
              </a>
            </div>
            <iframe
              height="250"
              src="https://www.youtube.com/embed/c2SyD0S-rFw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
        <Image
          objectFit="cover"
          className="rounded-3"
          src="/images/emmaus9.jpg"
          alt="chantier-ete-emmaus"
          width={600}
          height={350}
          layout="intrinsic"
        />
      </div>
      <div className="text-center">
        <h2>SI TOI AUSSI…</h2>
        <p>
          Tu es une brique, un fruit, ou la combinaison des deux, écris-nous
          pour rejoindre la team !
        </p>
        <button class="cta">
          <span>Je m'inscris</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
