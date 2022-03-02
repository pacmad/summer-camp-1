import Card from "./Card";

export default function Cards({ t }) {
  const cardData = [
    {
      id: 1,
      titre: "Un engagement",
      info: "letters,content heras theirault mode model text, and a search for 'lorem ipsum' will un",
      picture: "./images/emmaus5.jpg",
    },
    {
      id: 2,
      titre: "Un découverte",
      info: "letters, as ' page editors now usepsum as their defage editors now usepsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/emmaus8.jpg",
    },
    {
      id: 3,
      titre: "Des rencontres",
      info: "letters, as opposngls and wm Ipsum as their default model text, and a search for 'lorem ipsum' will un",
      picture: "./images/summer4.jpg",
    },
  ];
  return (
    <div className="my-5">
      <h2>{t("title-2")}</h2>
      <div className="row">
        {cardData.map((cardsInfo) => (
          <Card key={cardsInfo.id} cardsInfo={cardsInfo} />
        ))}
      </div>
    </div>
  );
}
