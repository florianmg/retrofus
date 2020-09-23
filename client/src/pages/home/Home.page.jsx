import React from "react";

import Card from "../../components/card";
import { ROUTES, TEXTES } from "../../constants";

import ImageDJ from "../../images/dj.png";
import ImageDROP from "../../images/zone.png";

import "./Home.scss";

const Home = ({ user, logged }) => {
  return (
    <div className="home">
      <div className="container">
        <h1 className="container__title">Je cherche un groupe pour</h1>
        <div className="container__card-list">
          <Card
            title={TEXTES.BUTTONS.GO_DONJON}
            to={ROUTES.DONJON}
            image={ImageDJ}
          />
          <Card
            title={TEXTES.BUTTONS.GO_ZONE}
            to={ROUTES.ZONES}
            image={ImageDROP}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
