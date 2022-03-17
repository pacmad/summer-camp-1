import React from "react";
import Image from "next/image";

export default function FaqSection() {
  return (
    <div className="faq-section container rounded">
      <h1>FAQ</h1>
      <p className="subtitle">On est en droit de se poser la question…</p>
      <div className="row question-section">
        <div className="col faq-1 shadow p-4 m-3  rounded">
          <h4>Une question ?</h4>
          <p>
            Elle est peut-être dans notre foire aux questions Comment s’inscrire
            ? Comment venir ? Comment les familles sont recrutées ? Le transport
            est-il compris ? etc ...
          </p>
        </div>
        <div className="col faq-2 shadow p-4 m-3 rounded">
          <h4>Savez-vous ?</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, doloremque. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium, doloremque.
          </p>
        </div>
      </div>
      {/* faq-1 */}
      <div className="row my-5">
        <h5>Inscription</h5>
        <div className="col-md-4">
          <Image
            src="/images/choisir.jpg"
            width={800}
            height={400}
            objectFit="cover"
            alt="emmaus-scherwiller"
            loading="lazy"
            layout="intrinsic"
          />
        </div>
        <div className="col-md-8">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Un séjour pour quel âge ?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Quel pays / Quelle destination ?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  À quelle periode et pour quelle durée ?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq-2 */}
      <div className="row my-5">
        <h5>Se préparer</h5>
        <div className="col-md-4">
          <Image
            src="/images/preparer.jpg"
            width={800}
            height={400}
            objectFit="cover"
            alt="emmaus-scherwiller"
            loading="lazy"
            layout="intrinsic"
          />
        </div>
        <div className="col-md-8">
          <div class="accordion accordion-flush" id="accordionFlushTwo">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne1">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne1"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne1"
                >
                  Les documents obligatoires
                </button>
              </h2>
              <div
                id="flush-collapseOne1"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne1"
                data-bs-parent="#accordionFlushTwo"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo2">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo2"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo2"
                >
                  Que je dois emporter avec moi ?
                </button>
              </h2>
              <div
                id="flush-collapseTwo2"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo2"
                data-bs-parent="#accordionFlushTwo"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree3">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree3"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree3"
                >
                  Les frais de transport sont-ils à ma charge ?
                </button>
              </h2>
              <div
                id="flush-collapseThree3"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree3"
                data-bs-parent="#accordionFlushTwo"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq-3 */}
      <div className="row my-5">
        <h5>Arrivée</h5>
        <div className="col-md-4">
          <Image
            src="/images/partir.jpg"
            width={800}
            height={400}
            objectFit="cover"
            alt="emmaus-scherwiller"
            loading="lazy"
            layout="intrinsic"
          />
        </div>
        <div className="col-md-8">
          <div class="accordion accordion-flush" id="accordionFlushThree">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne11">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne11"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne11"
                >
                  Programme du séjour
                </button>
              </h2>
              <div
                id="flush-collapseOne11"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne11"
                data-bs-parent="#accordionFlushThree"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo22">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo22"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo22"
                >
                  Où je vais dormir ? / Que je vais manger ?
                </button>
              </h2>
              <div
                id="flush-collapseTwo22"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo22"
                data-bs-parent="#accordionFlushThree"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree33">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree33"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree33"
                >
                  Que faire en dehors des horaires de travail ?
                </button>
              </h2>
              <div
                id="flush-collapseThree33"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree33"
                data-bs-parent="#accordionFlushThree"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
