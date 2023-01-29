import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./plans.css";
export default function PlansBox({ children, price, icon }) {
  price > 0 ? (price = `${price} میلیون تومان`) : (price = "رایگان");

  return (
    <div className="plans-box">
      <div className="plans-box-icon">
        <FontAwesomeIcon icon={icon} />
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
