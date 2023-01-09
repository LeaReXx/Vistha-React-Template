import React from "react";
import Header from "./header/header";
import About from "./about-sec/about";
import Service from "./service-sec/service";
import Plans from "./plans-sec/plans";
import "./app.css";
import "./fonts.css";
function App() {
  return (
    <div>
      <Header />
      <About />
      <Service />
      <Plans />
    </div>
  );
}

export default App;
