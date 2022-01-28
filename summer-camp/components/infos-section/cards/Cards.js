import React from "react";
import Card from "./Card";

export default function Cards() {
  const cardData = [
    {
      id: 1,
      titre: "Un engagement",
      info: "letters,content heras theirault mode model text, and a search for 'lorem ipsum' will un",
      picture: "./images/summer1.jpg",
    },
    {
      id: 2,
      titre: "Un découverte",
      info: "letters, as ' page editors now usepsum as their defage editors now usepsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/summer3.jpg",
    },
    {
      id: 3,
      titre: "Des rencotres",
      info: "letters, as opposngls and wm Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/summer4.jpg",
    },
  ];
  return (
    <div className="cards ">
      <h2>Les chantiers d’été, c’est quoi ?</h2>
      <div className="row g-4 ">
        {cardData.map((cardsInfo) => (
          <div className="col">
            <Card key={cardsInfo.id} cardsInfo={cardsInfo} />
          </div>
        ))}
      </div>
    </div>
  );
}
