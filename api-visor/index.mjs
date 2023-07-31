import express from 'express'
import dotenv from 'dotenv'
import router from './src/routes/app-routes.mjs'
import bodyParser from 'body-parser'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './src/swagger-doc.mjs'

const app = express()
app.use(cors())
dotenv.config()

app.use(bodyParser.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hola, mundo!')
})

app.use('/v1', router)

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`)
})

export default app
