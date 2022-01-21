const Card = ({ cardsInfo }) => {
  return (
    <div className="col">
      <div className="card">
        <img class="card-img-top" src={cardsInfo.picture} alt="solidarite" />
        <div className="card-body">
          <h3>{cardsInfo.titre}</h3>
          <p className="card-text">{cardsInfo.info}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
