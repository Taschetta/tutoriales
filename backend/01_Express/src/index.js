//RESOURCES
//Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//Express: https://expressjs.com/en/4x/api.html

import express from 'express'

const app = express()
app.use(express.json())

let articulos = []

app.get('/articulos', (req, res) => {
  res.send(articulos)
})

// app.post('/articulos', (req, res) => {
//   const nuevoArticulo = req.body
  
//   articulos.push(nuevoArticulo)
  
//   res.json(articulos)
// })

// app.post('/articulos/:id', (req, res) => {
//   const id = req.params.id
//   const nuevoArticulo = req.body

//   articulos = articulos.map(articulo => {
//     if(articulo.id == id) {
//       return nuevoArticulo
//     }
//     return articulo
//   })

//   res.json(articulos)
// })

// app.delete('/articulos/:id', (req, res) => {
//   const id = req.params.id
  
//   const index = articulos.findIndex(articulo => articulo.id == id)
//   articulos.splice(index)

//   res.json(articulos)
// })

app.listen(3333, () => console.log('Escuchando en puerto 3333'))