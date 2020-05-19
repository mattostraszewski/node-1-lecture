const users = require('../data.json')
let id = users[users.length - 1].id + 1

module.exports = {
  getAllUsers: (req, res) => {
    const { email } = req.query

    if (email) {
      const filteredUsers = users.filter(element => element.email.includes(email))
      res.status(200).send(filteredUsers)
    } else {
      res.status(200).send(users)
    }
  },

  getUserById: (req, res) => {
    const { user_id } = req.params
    const user = - users.find(element => element.id === user_id)

    if (user) {
      res.status(200).send(user)
    } else {
      res.status(404).send('User not found')
    }
  },

  createUser: (reg, res) => {
    const { first_name, last_name, email } = req.body

    const newUser = { id, first_name, last_name, email }

    users.push(newUser)

    id++
  },

  editUser: (req, res) => {
    const { user_id } = req.params
    const { first_name, last_name, email } = req.body
    const index = users.findIndex(elem => elem.id === +user_id)
    if (index === -1) {
      return res.status(404).send('No user found')
    } else {
      // const updatedUser = {
      //   id: +user_id,
      //   first_name: first_name,
      //   last_name: last_name,
      //   email: email
      // }
      const updateUser = {
        id: +user_id,
        first_name: first_name || users[index].first_name,
        last_name: last_name || users[index].last_name,
        email: email || users[index].email

      }
      // users.splice(user_id, 1, updateUser)
      users[index] = updateUser
      res.status(200).send(users)
    }
  },

  deleteUser: (req, res) => {
    const { user_id } = req.params
    const index = users.findIndex(elem => elem.id === +user_id)
    if (index === -1) {
      return res.status(404).send('No user exists')
    } else {
      users.splice(user_id, 1)
      res.status(200).send('User has been deleted')
    }

  }
} 