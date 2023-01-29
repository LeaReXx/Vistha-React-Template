import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";

import Header from "./header/header";
import About from "./about-sec/about";
import Service from "./service-sec/service";
import Plans from "./plans-sec/plans";
import Blog from "./blog-sec/blog";
import Customers from "./customers-sec/customers";
import Contact from "./contact-sec/contact";
import Footer from "./footer/footer";
import "./app.css";
import "./fonts.css";
library.add(fas);

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
      <Footer />
    </div>
  );
}

export default App;
