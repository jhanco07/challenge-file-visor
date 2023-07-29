import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hola, mundo!')
})

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`)
})

export default app
