import React from "react";
import { ZONES } from "../../constants";

import ListRooms from "../../components/list-rooms";

import "./DropXp.scss";

const DropXp = ({ logged, user }) => {
  return (
    <div className="drop">
      <ListRooms
        rooms={ZONES}
        title="Séléctionner une zone"
        logged={logged}
        user={user}
      />
    </div>
  );
};

export default DropXp;
