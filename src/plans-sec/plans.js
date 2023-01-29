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
          <PlansBox price="0" icon='fa-solid fa-plane'>
            <ul>
              <li>طراحی سایت با قالب آماده</li>
              <li className="line-through">پشتیبانی 24 ساعته</li>
              <li className="line-through">دیزاین اختصاصی </li>
              <li className="line-through">جلسه حضوری</li>
            </ul>
          </PlansBox>
          <PlansBox price="3" icon='fa-solid fa-credit-card'>
            <ul>
              <li>طراحی سایت با قالب آماده</li>
              <li>پشتیبانی 24 ساعته</li>
              <li>دیزاین اختصاصی </li>
              <li>جلسه حضوری</li>
            </ul>
          </PlansBox>
          <PlansBox price="1" icon='fa-solid fa-car'>
            <ul>
              <li>طراحی سایت با قالب آماده</li>
              <li>پشتیبانی 24 ساعته</li>
              <li>دیزاین اختصاصی </li>
              <li className="line-through">جلسه حضوری</li>
            </ul>
          </PlansBox>
        </div>
      </div>
    </section>
  );
}
