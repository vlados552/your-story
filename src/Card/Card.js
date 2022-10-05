import React from "react";
import "./Card.css";

function Card({ state, data }) {
  return <div className={`grid grid-card ${state ? 'card-front': 'card-back'}`}></div>;
}

export default Card;
