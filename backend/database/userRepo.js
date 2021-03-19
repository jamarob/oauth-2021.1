const users = [
  {
    username: 'jamarob',
    favoriteAnimal: 'Dogs',
  },
]

const existsByUsername = (username) =>
  users.some((user) => user.username === username)

const findByUsername = (username) =>
  users.find((user) => user.username === username)

module.exports = { existsByUsername, findByUsername }
