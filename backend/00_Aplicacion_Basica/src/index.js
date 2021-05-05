//importo express desde node_modules
import express from 'express'

//inicializo aplicacion 
const app = express()

app.get('/saludo', (req, res) => {
  res.send('Hola Mundo')
})

app.get('/despedida', (req, res) => {
  res.send('Chau Mundo')
})

app.listen(3333, () => {
  console.log('Escuchando en puerto 3333')
})