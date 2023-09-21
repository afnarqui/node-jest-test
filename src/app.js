const express = require('express')
const pino = require('pino-http')()
const app = express()

app.use(pino)
app.use(express.json())

const router = express.Router()

const users = {name:'andres', apellido: 'naranjo'}

router.get('/users', (req, res) => {
  return res.status(200).send(users)
})

app.use(router)

module.exports = app

