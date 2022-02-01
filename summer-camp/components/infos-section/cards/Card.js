const Card = ({ cardsInfo }) => {
  return (
    <div className="card h-100 shadow  ">
      <img class="card-img-top " src={cardsInfo.picture} alt="solidarite" />
      <div className="card-body">
        <h4>{cardsInfo.titre}</h4>
        <p className="card-text">{cardsInfo.info}</p>
      </div>
    </div>
  );
};

export default Card;
