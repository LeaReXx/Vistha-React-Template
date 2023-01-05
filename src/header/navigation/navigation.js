import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

import "./navigation.css";
export default function Navigation() {
  return (
    <div className="header-top">
      <div className="logo-parent">
        <img src="./imgs/logo.png" alt="" />
      </div>
      <nav>
        <ul className="nav-link-parent">
          <li>
            <a href="https://reactjs.org/" className="nav-link">
              خانه
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/" className="nav-link">
              درباره ما
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/" className="nav-link">
              خدمات ما
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/" className="nav-link">
              تعرفه ها
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/" className="nav-link">
              وبلاگ
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/" className="nav-link">
              نظرات مشتریان
            </a>
          </li>
          <li className="nav-call-btn-parent green-btn">
            <a href="https://reactjs.org/" className="nav-link">
              <FontAwesomeIcon icon={solid.faPhone} className="nav-call-icon" />
              تماس
            </a>
          </li>
        </ul>
      </nav>
      <div className="mobile-btn">
        <FontAwesomeIcon icon={solid.faBars} />
      </div>
    </div>
  );
}
