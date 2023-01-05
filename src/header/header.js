import React from "react";
import Navigation from "./navigation/navigation";
import "./header.css";

export default function header() {
  return (
    <header>
      <div className="container-max-width">
        <Navigation />
      </div>
    </header>
  );
}
