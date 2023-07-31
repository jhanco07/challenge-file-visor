import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Api-visor',
      version: '1.0.0',
      description: 'Api Full Stack JS - Code Challenge'
    }
  },
  apis: ['./routes/app-routes.mjs']
}

const swaggerSpec = swaggerJsdoc(options)

export default swaggerSpec
