const express = require('express')

const rutasBluetooth = require('./routes/bluetooth')

let app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/bluetooth', rutasBluetooth)

app.use((error, req, res, next) => {
  console.log(error)
  res.status(500).json({ error })
})

let server = app.listen(4000, () => {
  console.log('Servido escuchando en le puerto 4000')
})
