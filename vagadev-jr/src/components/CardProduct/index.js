import React, { useState } from "react";
import Tooltip from "../Tooltip";
import { toMoney } from "vanilla-masker";

import marioImage from "../../assets/img/marioImage.png";

import "./cardProduct.css";

function CardProduct(props) {
  const [purchased, setPurchased] = useState(false);

  const onClickBuy = () => {
    if (!purchased) {
      props.onClickBuy();
      setPurchased(true);
    }
  };
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
          <button
            className={purchased ? "purchased-button" : "buy-button"}
            onClick={() => onClickBuy()}
          >
            {purchased ? (
              <span>
                COMPRADO! <img src={marioImage} alt="Imagem mário" />
              </span>
            ) : (
              "COMPRAR"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
