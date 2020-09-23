const users = [];

const addUser = ({ id, roomName, userInfos }) => {
  roomName = roomName.trim().toLowerCase();
  userInfos.pseudo = userInfos.pseudo.trim().toLowerCase();

  const existingUser = users.find(
    (user) =>
      user.roomName === roomName &&
      user.userInfos.pseudo === userInfos.pseudo &&
      parseInt(user.userInfos.server, 10) === parseInt(userInfos.server, 10)
  );

  if (existingUser)
    return {
      error:
        "Un utilisateur avec ce pseudo est déjà connecté.\nVérifiez votre pseudo et votre serveur.",
    };

  const user = { id, roomName, userInfos };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (roomName) => {
  return users.filter((user) => user.roomName === roomName);
};

module.exports = { addUser, removeUser, getUsersInRoom, getUser };
