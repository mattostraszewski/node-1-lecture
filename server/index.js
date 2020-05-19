const express = require('express')
const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4000

app.use(express.json()) //parse's body. explain please

//app.use is middleware

app.use(function (req, res, next) {
  console.log('We got a request')
  next()
}) //this will apply on every request to the server

app.get('/api/matthew', (req, res) => {
  res.status(200).send('Matthew')
})

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:user_id')

app.post('/app/users', ctrl.createUser)

app.put('/app/users/:user_id', ctrl.editUser)

app.delete('/app.users/:user_id', ctrl.deleteUser)

app.listen(SERVER_PORT, () =>
  console.log(`Server running on port ${SERVER_PORT}`))