import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="container-max-width page-default-padding">
        <div className="contact-parts">
          <div className="contact-right-box">
            <form>
              <div className="input-parent">
                <label htmlFor="name">نام</label>
                <input type="text" id="name" />
              </div>
              <div className="input-parent">
                <label htmlFor="number">شماره تماس</label>
                <input type="tel" id="number" />
              </div>
              <div className="input-parent">
                <label htmlFor="email">ایمیل</label>
                <input type="email" id="email" />
              </div>
              <div className="input-parent">
                <label htmlFor="message">پیام</label>
                <textarea id="message" cols="30" rows="3" ></textarea>
              </div>
              <button type="submit" className="green-btn">ارسال</button>
            </form>
          </div>
          <div className="contact-left-box">
            <h3>تماس با ما</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
            <div className="contact-left-box-img-parent">
              <img src="./imgs/contact.svg" alt="Contact Img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
