import React from "react";
import { Link } from "react-router-dom";
import { ELEMENTS, TEXTES } from "../../constants";
import "./PlayerCard.scss";

const PlayerCard = ({ user, playerIsUser, roomName }) => {
  return (
    <div className="player-card">
      <div className="player-card__top">
        <span className={`class __${user.class}`} />
        <div className="player-card__top__infos">
          <p className="pseudo">{user.pseudo}</p>
          <p className="level">{`Niveau ${user.level}`}</p>
          {user.elements && (
            <div className="elements">
              {user.elements.map((e, i) => (
                <span key={i} className={`icon __${ELEMENTS[e]}`} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="player-card__bottom">
        <div className="personal-message">
          <div className="message">
            <span className="sep" />
            <p className="message__content">
              <span className="text">{user.message}</span>
              {playerIsUser && (
                <Link to={`/profile/${roomName}`} className="update-message">
                  {TEXTES.UPDATE_MESSAGE}&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
