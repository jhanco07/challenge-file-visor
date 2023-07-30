import express from 'express'
import dotenv from 'dotenv'
import router from './src/routes/app-routes.mjs'
import {PORT} from './src/utils/constants.mjs'

const app = express()
dotenv.config()


const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hola, mundo!')
})

app.use('/v1', router);

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`)
})

export default app
