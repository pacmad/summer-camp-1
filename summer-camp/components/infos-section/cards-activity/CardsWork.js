import React from "react";
import CardWork from "./CardWork";

export default function CardsWork() {
  const cardActivityData = [
    {
      id: 1,
      titre: "LES STRUCTURES D’INSERTION",
      info: "Emmaus Etikette, Emmaus Ethilocletters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/emmaus-insertion.jpg",
      site: "https://www.zone51.net/zone51/notre-projet/",
    },
    {
      id: 2,
      titre: "EmmaCulture",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/emmaculture.jpg",
      site: "https://www.decibulles.com/",
    },
    {
      id: 3,
      titre: "La vie Communauté",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/emmaus9.jpg",
      site: "https://www.visit.alsace",
    },

    {
      id: 4,
      titre: "Le tri des objets",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/emmaus-tri.jpg",
      site: "https://www.visitstrasbourg.fr",
    },
  ];
  return (
    <div className="my-5">
      <div className="row">
        {cardActivityData.map((cardItem) => (
          <CardWork key={cardItem.id} cardItem={cardItem} />
        ))}
      </div>
    </div>
  );
}
