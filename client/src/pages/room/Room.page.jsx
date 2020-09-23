import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { ENDPOINT, SERVERS } from "../../constants";
import io from "socket.io-client";
import PlayerCard from "../../components/player-card";
import Alert from "../../components/alert";

import "./Room.scss";

let socket;

const Room = () => {
  const { roomName } = useParams();
  const userInfos = JSON.parse(localStorage.getItem("user"));
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const previous = usePrevious(userList);

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { roomName, userInfos }, (error) => {
      if (error) {
        setError(true);
        setErrorMessage(error);
        return;
      }
    });

    setIsLoading(false);
    return () => socket.close();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    socket.on("roomData", (roomData) => {
      if (previous !== roomData) {
        setUserList(roomData);
      }
    });
  }, [userList, previous]);

  if (isLoading) return <div>Veuillez patienter</div>;

  return (
    <div className="room">
      <div className="container">
        <div className="container__title">
          <p className="roomName">{`${roomName.replace(/-/g, " ")} [${
            SERVERS[userInfos.server]
          }]`}</p>
          <p className="warning">
            Merci de penser a quitter cette page lorsque vous avez trouvé un
            groupe
          </p>
        </div>
        {error ? (
          <Alert message={errorMessage} linkButton={`/profile/${roomName}`} />
        ) : (
          <div className="player-list">
            {userList &&
              userList.map(
                (e, i) =>
                  parseInt(e.userInfos.server, 10) ===
                    parseInt(userInfos.server, 10) && (
                    <PlayerCard
                      key={i}
                      user={e.userInfos}
                      roomName={e.roomName}
                      playerIsUser={
                        userInfos.pseudo.toLowerCase() ===
                        e.userInfos.pseudo.toLowerCase()
                      }
                    />
                  )
              )}
          </div>
        )}
      </div>
    </div>
  );
};

// Hook
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export default Room;
