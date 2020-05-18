const express = require('express')
const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4000

app.use(express.json())

app.get('/api/matthew', (req, res) => {
  res.status(200).send('Matthew')
})

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:user_id')

app.listen(SERVER_PORT, () =>
  console.log(`Server running on port ${SERVER_PORT}`))