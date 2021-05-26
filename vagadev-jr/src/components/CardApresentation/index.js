import React from "react";
import "./cardApresentation.css";
function CardApresentation(props) {
  return (
    <div className="card-apresentation">
      <img src={props.image} alt="Apresentação de jogos" />
      <div className="legend">
        {props.legend}
        <span className="horizontal-divider"></span>
      </div>
    </div>
  );
}

export default CardApresentation;
