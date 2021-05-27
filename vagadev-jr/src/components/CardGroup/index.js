import React from "react";
import CardProduct from "../CardProduct";

import "./cardGroup.css";

function CardGroup(props) {
  console.log(props);
  return (
    <div className="card-group">
      {props.data.map((item, index) => (
        <CardProduct
          image={item.image}
          title={item.title}
          price={item.price}
          key={index}
        />
      ))}
    </div>
  );
}

export default CardGroup;