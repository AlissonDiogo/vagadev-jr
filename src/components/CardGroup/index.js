import React, { useState } from "react";
import CardProduct from "../CardProduct";

import arrowLeft from "../../assets/svgs/angle-left-solid-black.svg";
import arrowRight from "../../assets/svgs/angle-right-solid-black.svg";

import "./cardGroup.css";

function CardGroup(props) {
  const [contItens, setContItens] = useState(0);

  const onChangeContItensRight = () => {
    if (contItens === props.data.length - 1) {
      setContItens(0);
    } else {
      setContItens(contItens + 1);
    }
  };

  const onChangeContItensLeft = () => {
    if (contItens === 0) {
      setContItens(props.data.length - 1);
    } else {
      setContItens(contItens - 1);
    }
  };
  return (
    <div className="card-group">
      {props.data.map((item, index) => {
        return (
          <div className="container-group-cards" key={index}>
            <CardProduct
              image={item.image}
              title={item.title}
              price={item.price}
              onClickBuy={props.onClickBuy}
            />
          </div>
        );
      })}
      {props.data.length > 0 ? (
        <div className="container-group-cards-mobile">
          <img
            src={arrowLeft}
            alt="Seta para voltar um item"
            onClick={() => onChangeContItensLeft()}
          />

          <CardProduct
            image={props.data.slice(contItens, contItens + 1)[0]?.image}
            title={props.data.slice(contItens, contItens + 1)[0]?.title}
            price={props.data.slice(contItens, contItens + 1)[0]?.price}
            onClickBuy={props.onClickBuy}
          />

          <img
            src={arrowRight}
            alt="Seta para avançar um item"
            onClick={() => onChangeContItensRight()}
          />
        </div>
      ) : null}
    </div>
  );
}

export default CardGroup;
