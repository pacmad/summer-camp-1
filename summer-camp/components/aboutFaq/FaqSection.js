import React from "react";

export default function FaqSection() {
  return (
    <div className="faq-section container rounded">
      <h1>FAQ</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore
        fugit ipsa repudiandae laudantium placeat! Similique ratione autem
        magnam veniam laudantium sapiente temporibus magni nihil accusantium.
        Delectus dolore odit iure esse, non sapiente consequuntur, at aperiam
        optio eveniet vel sed!
      </p>
      <div className="row question-section">
        <div className="col faq-1 shadow p-4 m-3  rounded">
          <h4>une question ?</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, doloremque. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium, doloremque. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Praesentium, doloremque.
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
      {/* **************************** */}
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
              Comment s'inscrire ?
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
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
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
              Quand s'incrire ?
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
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
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
              Je n'ai pas reçu l'e-mail pour confirmer mon inscription, comment
              faire ?
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
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading4">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse4"
              aria-expanded="false"
              aria-controls="flush-collapse4"
            >
              Est-ce payant de s'inscrire ?
            </button>
          </h2>
          <div
            id="flush-collapse4"
            class="accordion-collapse collapse"
            aria-labelledby="flush-heading4"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
