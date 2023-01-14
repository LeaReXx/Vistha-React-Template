import React from "react";
import Header from "./header/header";
import About from "./about-sec/about";
import Service from "./service-sec/service";
import Plans from "./plans-sec/plans";
import Blog from "./blog-sec/blog";
import Customers from "./customers-sec/customers";
import Contact from "./contact-sec/contact";
import "./app.css";
import "./fonts.css";
function App() {
  return (
    <div>
      <Header />
      <About />
      <Service />
      <Plans />
      <Blog />
      <Customers />
      <Contact />
    </div>
  );
}

export default App;
