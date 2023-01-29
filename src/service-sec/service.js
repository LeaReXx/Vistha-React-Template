import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./service.css";

export default function Service() {
  let serviceArray = [
    {
      id: 1,
      icon: "fa-solid fa-shield",
      title: "طراحی سایت",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 2,
      icon: "fa-solid fa-plane",
      title: "برنامه نویسی موبایل",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 3,
      icon: "fa-solid fa-phone",
      title: "خدمات رزرواسیون",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 4,
      icon: "fa-solid fa-dollar-sign",
      title: "خدمات تجاری",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 5,
      icon: "fa-solid fa-credit-card",
      title: "پشتیبانی درجه اول",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 6,
      icon: "fa-solid fa-sim-card",
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
          {serviceArray.map((item) => {
            return (
              <div className="service-box" key={item.id}>
                <div className="service-box-details">
                  <div className="service-box-icon">
                    <FontAwesomeIcon icon={item.icon} fixedWidth />
                  </div>
                  <div className="service-box-title">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="service-box-description">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
