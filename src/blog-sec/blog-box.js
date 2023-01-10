import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
export default function BlogBox({ img = './imgs/Notfound.jpg', title, category, date }) {
  return (
    <a href="reactjs.com" className="blog-section-box">
      <div className="blog-box-img">
        <img src={img} alt="" />
      </div>
      <div className="blog-box-details">
        <h4>{title}</h4>
        <div className="blog-box-other-details">
          <span className="blog-box-date">
            {date}
            <FontAwesomeIcon
              icon={solid.faCalendarDays}
              className="blog-box-date-icon"
            />
          </span>
          <span className="blog-box-category">{category}</span>
        </div>
      </div>
    </a>
  );
}
