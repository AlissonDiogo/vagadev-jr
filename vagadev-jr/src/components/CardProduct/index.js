import React from "react";
import Tooltip from "../Tooltip";
import { toMoney } from "vanilla-masker";
import "./cardProduct.css";

function CardProduct(props) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.image} alt={"Imagem do produto: " + props.title} />
      </div>
      <div className="card-bottom">
        <h3 className="product-title">
          {props.title.length > 16 ? (
            <Tooltip>{props.title}</Tooltip>
          ) : (
            props.title
          )}
        </h3>
        <div className="product-price">
          {"R$ " + toMoney(props.price.toFixed(2))}
          {/* {"R$ " + toMoney(123)} */}
        </div>
        <div className="container-buy-button">
          <button className="buy-button" onClick={() => props.onClickBuy()}>
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
