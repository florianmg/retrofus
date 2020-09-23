import React from "react";
import { Link } from "react-router-dom";

import "./Card.scss";

const Card = ({ title, to, image }) => {
  return (
    <div className="card">
      <img src={image} alt="placeholder" />
      <div className="card__content">
        <Link to={to}>{title}</Link>
      </div>
    </div>
  );
};

export default Card;
