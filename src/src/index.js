import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Video from "./js/video";
import TopBar from "./js/topBar";

ReactDOM.render(
  <div>
    <TopBar />
    <Video query="Gorillaz" />
  </div>,
  document.getElementById("root")
);
