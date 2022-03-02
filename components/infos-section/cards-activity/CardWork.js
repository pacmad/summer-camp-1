import React from "react";

const CardWork = ({ cardItem }) => {
  return (
    <div className="col-md-4 my-3">
      <div className="card shadow h-100">
        <img className="card-img-top" src={cardItem.picture} alt="emmaus" />
        <div className="card-body">
          <h4>{cardItem.titre}</h4>
          <p>{cardItem.info}</p>
        </div>
        <a className="btn btn-primary text-light" href={cardItem.site}>
          Plus d'infos <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default CardWork;
