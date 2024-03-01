import React from "react";
import "../styles/HomeComponent.css";
import { Link } from "react-router-dom";

const HomeComponent = () => (
  <div className="home">
    <h3 className="home-heading">Quiz App</h3>
    <Link to="play-quiz" className="home-bt">
      <button className="home-bt">Play Now!</button>
    </Link>
  </div>
);

export default HomeComponent;