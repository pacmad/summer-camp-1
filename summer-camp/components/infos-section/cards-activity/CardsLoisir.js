import React from "react";
import CardLoisir from "./CardLoisir";

export default function CardsLoisir() {
  const cardActivityData = [
    {
      id: 1,
      titre: "Zone 51",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/zone51.jpg",
      site: "https://www.zone51.net/zone51/notre-projet/",
    },
    {
      id: 2,
      titre: "Décibulles",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/decibulles.jpg",
      site: "https://www.decibulles.com/",
    },
    {
      id: 3,
      titre: "Visite Sélestat",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/strasbourg3.jpg",
      site: "https://www.visit.alsace",
    },
    {
      id: 4,
      titre: "Visite Strasbourg",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/strasbourg2.jpg",
      site: "https://www.visitstrasbourg.fr",
    },

    {
      id: 5,
      titre: "Visite les Communautés Emmaüs",
      info: "letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/emmaus-alsace.jpg",
      site: "https://www.visitstrasbourg.fr",
    },
  ];
  return (
    <div className="my-5">
      <div className="row">
        {cardActivityData.map((cardItem) => (
          <CardLoisir key={cardItem.id} cardItem={cardItem} />
        ))}
      </div>
    </div>
  );
}
