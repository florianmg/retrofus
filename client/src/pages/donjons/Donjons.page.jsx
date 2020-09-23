import React from "react";

import { DONJONS } from "../../constants";

import ListRooms from "../../components/list-rooms";
import "./Donjons.scss";

const Donjons = ({ user, logged }) => {
  return (
    <div className="donjons">
      <ListRooms
        rooms={DONJONS}
        title="Séléctionner un donjon"
        user={user}
        logged={logged}
      />
    </div>
  );
};

export default Donjons;
