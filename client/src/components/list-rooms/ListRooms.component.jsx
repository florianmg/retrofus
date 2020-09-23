import React, { useEffect, useState } from "react";
import Input from "../input";
import { Link } from "react-router-dom";
import { TEXTES } from "../../constants";

import "./ListRooms.scss";

const ListRooms = ({ rooms, title, logged, user }) => {
  const [listOfRooms, setListOfRooms] = useState(rooms);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const results = rooms.filter((room) =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setListOfRooms(results);
  }, [searchTerm, rooms]);

  return (
    <div className="list-rooms">
      <div className="container">
        <p className="list-rooms__title">{title}</p>
        <Input
          label="Rechercher :"
          type="text"
          placeholder="Ex: Bouftou "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table className="container__table">
          <thead>
            <tr>
              <td>{TEXTES.LIST.NAME}</td>
              <td className="m-remove">{TEXTES.LIST.LEVEL}</td>
              <td>{TEXTES.LIST.ACTION}</td>
            </tr>
          </thead>
          <tbody>
            {listOfRooms.map((e, i) => (
              <tr key={i}>
                <td>{e.name}</td>
                <td className="m-remove">{e.level}</td>
                <td className="btn">
                  <Link
                    to={
                      logged
                        ? `/room/${e.name.replace(/\s/g, "-")}`
                        : `/profile/${e.name.replace(/\s/g, "-")}`
                    }
                  >
                    {TEXTES.BUTTONS.JOIN}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/*function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
} */

export default ListRooms;
