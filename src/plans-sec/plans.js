import React from "react";
import PlansBox from "./plans-box";
import "./plans.css";
export default function Plans() {
  return (
    <section className="plans-section">
      <div className="container-max-width page-default-padding">
        <div className="plans-header">
          <h2>تعرفه ها</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
        <div className="plans-detail">
          <PlansBox price="0" />
          <PlansBox price="3" />
          <PlansBox price="1" />
        </div>
      </div>
    </section>
  );
}
