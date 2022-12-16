import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.send('🤷‍♂️Bienvenidos a calse de desarrollo de Aplicaciones Web')
})

app.listen(8000, ()=> {
    console.log("El servidor está corriendo en http://localhost:8000")
})