const Card = ({ cardsInfo }) => {
  return (
    <div className="col">
      <div className="card shadow ">
        <img class="card-img-top " src={cardsInfo.picture} alt="solidarite" />
        <div className="card-body">
          <h4>{cardsInfo.titre}</h4>
          <p className="card-text">{cardsInfo.info}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
