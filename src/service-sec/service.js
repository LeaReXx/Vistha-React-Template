import React from "react";
import ServiceBox from "./service-box";
import "./service.css";

export default function Service() {
  let serviceArray = [
    {
      icon: "faMugHot",
      title: "طراحی سایت",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      icon: "faMobileScreenButton",
      title: "برنامه نویسی موبایل",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      icon: "faPaperPlane",
      title: "خدمات رزرواسیون",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      icon: "faCartShopping",
      title: "خدمات تجاری",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      icon: "faShield",
      title: "پشتیبانی درجه اول",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      icon: "faCloud",
      title: "فناوری ابری",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
  ];
  return (
    <section className="service-section">
      <div className="container-max-width page-default-padding">
        <div className="service-header">
          <span>شرکت ویستا</span>
          <h2>لورم ایپسوم</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
        <div className="service-details">
          <ServiceBox {...serviceArray[0]} />
          <ServiceBox {...serviceArray[1]} />
          <ServiceBox {...serviceArray[2]} />
          <ServiceBox {...serviceArray[3]} />
          <ServiceBox {...serviceArray[4]} />
          <ServiceBox {...serviceArray[5]} />
        </div>
      </div>
    </section>
  );
}
