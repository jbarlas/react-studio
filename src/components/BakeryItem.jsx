// TODO: create a component that displays a single bakery item
import React from "react";

export default function BakeryItem(props) {
  return (
    <div className="item-container">
      <div className="item-desc-container">
        <div className="text-container">
          <div className="item-name">{props.name}</div>
          <div className="item-description">{props.description}</div>
        </div>
        <div className="footer-container">
          <div className="item-price">{props.price}</div>
          <div className="add-button" onClick={() => props.addToCart(props.id)}>
            add to cart
          </div>
        </div>
      </div>
      <img src={props.image} alt={props.name} className="item-image" />
    </div>
  );
}
