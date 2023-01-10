import React from "react";
import Header from "./header/header";
import About from "./about-sec/about";
import Service from "./service-sec/service";
import Plans from "./plans-sec/plans";
import Blog from "./blog-sec/blog";
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
    </div>
  );
}

export default App;
