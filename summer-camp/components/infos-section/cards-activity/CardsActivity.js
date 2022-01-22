import React from "react";
import CardActivity from "./CardActivity";

export default function CardsActivity() {
  const cardActivityData = [
    {
      id: 1,
      titre: "Zone 51",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/zone51.jpg",
    },
    {
      id: 2,
      titre: "Décibulles",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/decibulles.jpg",
    },
    {
      id: 3,
      titre: "Visite Alsace",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/strasbourg.jpg",
    },
    {
      id: 4,
      titre: "Visite Strasbourg",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/summer4.jpg",
    },
    {
      id: 5,
      titre: "Visite Colmar",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/colmar.jpg",
    },
    {
      id: 6,
      titre: "Emmaüs Strasbourg",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/summer4.jpg",
    },
  ];
  return (
    <div>
      <h2>Nos activites !</h2>
      <div className="row">
        {cardActivityData.map((cardItem) => (
          <CardActivity key={cardItem.key} cardItem={cardItem} />
        ))}
      </div>
    </div>
  );
}
