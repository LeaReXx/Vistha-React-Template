import React from "react";
import BlogBox from "./blog-box";
import "./blog.css";
export default function Blog() {
  let blogBoxData = [
    {
      img: "./imgs/blog-1.jpg",
      title: "لورم اپسیوم یک متن ساختگی است",
      category: "مدرن",
      date: "1401/10/20",
    },
    {
      title: "لورم اپسیوم یک متن ساختگی است",
      category: "اخبار",
      date: "1401/10/20",
    },
    {
      img: "./imgs/blog-3.jpg",
      title: "لورم اپسیوم یک متن ساختگی است",
      category: "نرم افزار",
      date: "1401/10/20",
    },
  ];
  return (
    <section className="blog-section">
      <div className="container-max-width page-default-padding">
        <div className="service-header">
          <span>آخرین اخبار ما</span>
          <h2>وبلاگ ما</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>
        <div className="blog-section-boxs-parent">
          <BlogBox {...blogBoxData[0]} />
          <BlogBox {...blogBoxData[1]} />
          <BlogBox {...blogBoxData[2]} />
        </div>
      </div>
    </section>
  );
}
