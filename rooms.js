let rooms = [];

const getRoomsInfos = () => rooms;

const addToRoom = (roomName, server) => {
  const existingRoom = rooms.find(
    (room) =>
      room.name === roomName &&
      parseInt(room.server, 10) === parseInt(server, 10)
  );
  if (existingRoom) {
    existingRoom.count = existingRoom.count + 1;
    return rooms;
  }
  const newRoom = {
    name: roomName,
    count: 1,
    server: server,
  };

  rooms.push(newRoom);
  return rooms;
};

const removeFromRoom = (roomName, server) => {
  rooms.map((room) =>
    room.name.toLowerCase() === roomName.toLowerCase() &&
    parseInt(room.server, 10) === parseInt(server, 10)
      ? (room.count = room.count - 1)
      : room
  );

  return rooms;
};

module.exports = { getRoomsInfos, addToRoom, removeFromRoom };
