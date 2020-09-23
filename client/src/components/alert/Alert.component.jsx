import React from "react";
import { Link } from "react-router-dom";
import { TEXTES } from "../../constants";

import "./Alert.scss";

const Alert = ({ message, linkButton }) => {
  return (
    <div className="alert">
      <div className="alert__container">
        <p>{message}</p>
        <Link className="alert__button" to={linkButton}>
          {TEXTES.ALERT_MESSAGE}
        </Link>
      </div>
    </div>
  );
};

export default Alert;
