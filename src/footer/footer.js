import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-max-width page-default-padding">
        <div className="footer-boxs">
          <div className="footer-about-us">
            <img src="./imgs/logo-white.png" alt="footer logo" />
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="footer-quick-access">
            <strong>دسترسی سریع</strong>
            <ul>
              <li className="footer-nav-link">
                <a href="reactjs.com">
                  <FontAwesomeIcon
                    icon={solid.faAnglesLeft}
                    className="footer-nav-links-icon"
                  />
                  درباره ما
                </a>
              </li>
              <li className="footer-nav-link">
                <a href="reactjs.com">
                  <FontAwesomeIcon
                    icon={solid.faAnglesLeft}
                    className="footer-nav-links-icon"
                  />
                  خدمات ما
                </a>
              </li>
              <li className="footer-nav-link">
                <a href="reactjs.com">
                  <FontAwesomeIcon
                    icon={solid.faAnglesLeft}
                    className="footer-nav-links-icon"
                  />
                  تعرفه ها
                </a>
              </li>
              <li className="footer-nav-link">
                <a href="reactjs.com">
                  <FontAwesomeIcon
                    icon={solid.faAnglesLeft}
                    className="footer-nav-links-icon"
                  />
                  وبلاگ
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <strong>تماس با ما</strong>
            <ul>
              <li>فرانکفورت, خ آیت الله دستغیب</li>
              <li>خیابان شیخ محمد کوچه ای </li>
              <li>
                <a href="tel:+98-4213243654">98-4213243654+</a>
              </li>
              <li>
                <a href="mailto:dev.sepehr@outlook.com">
                  Dev.sepehr@outlook.com
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-socials">
            <strong>شبکه های اجتماعی</strong>
            <div className="footer-socials-icon-parent">
              <a href="reactjs.com">
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="footer-socials-icon"
                />
              </a>
              <a href="reactjs.com">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="footer-socials-icon"
                />
              </a>
              <a href="reactjs.com">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="footer-socials-icon"
                />
              </a>
              <a href="reactjs.com">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="footer-socials-icon"
                />
              </a>
            </div>
          </div>
          <div className="footer-copy-right">
            <p>تمامی حقوق برای این قالب محفوظ است</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
