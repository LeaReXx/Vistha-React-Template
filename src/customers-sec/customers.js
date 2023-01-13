import React, { Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./customers.css";

export default class Customers extends Component {
  render() {
    return (
      <section className="customers-section">
        <div className="container-max-width page-default-padding">
          <Swiper
            slidesPerView={1}
            spaceBetween={150}
            loop={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Pagination]}
            className="customerSwiper"
          >
            <SwiperSlide className="slider">
              <div className="slider-content">
                <div className="slider-customer-details">
                  <span>نظرات مشتریان</span>
                  <h3>لورم اپسیوم متن ساختگی</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد،
                  </p>
                  <span className="customer-name">
                    <FontAwesomeIcon
                      icon={solid.faUserNinja}
                      className="customer-icon"
                    />{" "}
                    لورم اپسیوم
                  </span>
                </div>
                <div className="slider-customer-image">
                  <img src="./imgs/customer-img-1.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider">
              <div className="slider-content">
                <div className="slider-customer-details">
                  <span>نظرات مشتریان</span>
                  <h3>لورم اپسیوم متن ساختگی</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد،
                  </p>
                  <span className="customer-name">
                    <FontAwesomeIcon
                      icon={solid.faUserNinja}
                      className="customer-icon"
                    />{" "}
                    لورم اپسیوم
                  </span>
                </div>
                <div className="slider-customer-image">
                  <img src="./imgs/customer-img-2.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider">
              <div className="slider-content">
                <div className="slider-customer-details">
                  <span>نظرات مشتریان</span>
                  <h3>لورم اپسیوم متن ساختگی</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد،
                  </p>
                  <span className="customer-name">
                    <FontAwesomeIcon
                      icon={solid.faUserNinja}
                      className="customer-icon"
                    />
                    لورم اپسیوم
                  </span>
                </div>
                <div className="slider-customer-image">
                  <img src="./imgs/customer-img-3.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    );
  }
}
