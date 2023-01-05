import React from "react";
import Navigation from "./navigation/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import "./header.css";
export default function header() {
  return (
    <header>
      <div className="container-max-width page-default-padding">
        <Navigation />
        <div className="header-content">
          <aside className="header-content-left">
            <img src="./imgs/header-banner.svg" alt="Header Banner" />
          </aside>
          <aside className="header-content-right">
            <h1>شرکت تجارت الکترونیک ویستا در زمینه طراحی سایت</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </p>
            <div className="header-content-right-btns">
              <a href="https://reactjs.org/" className="green-btn">
                <button className="header-service-btn">
                  <FontAwesomeIcon
                    icon={solid.faGear}
                    className="header-btns"
                  />
                  خدمات ما
                </button>
              </a>
              <a href="https://reactjs.org/" className="bordered-btn">
                <button>
                  <FontAwesomeIcon
                    icon={solid.faPhone}
                    className="header-btns"
                  />
                  تماس با ما
                </button>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}
