import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import "./about.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="container-max-width page-default-padding">
        <div className="about-section-left">
          <img src="./imgs/about-section.svg" alt="" />
        </div>
        <div className="about-section-right">
          <span className="about-span">درباره ویستا</span>
          <h2 className="about-title">طراحی سایت حرفه ای برای شما</h2>
          <p className="about-decription">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <div className="about-btn-parent">
          <button className="green-btn about-section-btn">
            <FontAwesomeIcon icon={solid.faBriefcase} />
            خدمات ما
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}
