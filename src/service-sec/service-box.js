import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import "./service.css";

export default function ServiceBox(props) {
  let { icons, title, description } = props;

  return (
    <div className="service-box">
      <div className="service-box-details">
        <div className="service-box-icon">
          <FontAwesomeIcon icon={solid.faShield} />
        </div>
        <div className="service-box-title">
          <h4>{title}</h4>
        </div>
        <div className="service-box-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
