import React from "react";
import Header from "./header/header";
import About from "./about-sec/about";
import Service from "./service-sec/service";
import "./app.css";
import "./fonts.css";
function App() {
  return (
    <div>
      <Header />
      <About />
      <Service />
    </div>
  );
}

export default App;
