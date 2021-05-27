import React from "react";
import Tooltip from "../Tooltip";

import "./cardProduct.css";

function CardProduct(props) {
  
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.image} />
      </div>
      <div className="card-bottom">
        <h3 className="product-title">
          {props.title.length > 16 ? (
            <Tooltip>{props.title}</Tooltip>
          ) : (
            props.title
          )}
        </h3>
        <div className="product-price">{"R$ " + props.price}</div>
        <div className="container-buy-button">
          <button className="buy-button">COMPRAR</button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
