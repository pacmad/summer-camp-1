import React from "react";

const CardActivity = ({ cardItem }) => {
  return (
    <div className="col-md-4 my-3">
      <div className="card shadow">
        <img className="card-img-top  " src={cardItem.picture} alt="emmaus" />
        <div className="card-body">
          <h4>{cardItem.titre}</h4>
          <p>{cardItem.info}</p>
        </div>
        <a className="btn btn-primary text-light" href="">
          More info <i class="fas fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};

export default CardActivity;
