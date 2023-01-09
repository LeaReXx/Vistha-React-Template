import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import "./plans.css";
export default function PlansBox({ children, price }) {
  price > 0 ? (price = `${price} میلیون تومان`) : (price = "رایگان");

  return (
    <div className="plans-box">
      <div className="plans-box-icon">
        <FontAwesomeIcon icon={solid.faCar} />
      </div>
      <div className="plans-box-price">
        <strong>{price}</strong>
      </div>
      <div className="plans-box-options">{children}</div>
      <div className="plans-box-btn">
        <button className="bordered-btn">سفارش</button>
      </div>
    </div>
  );
}
