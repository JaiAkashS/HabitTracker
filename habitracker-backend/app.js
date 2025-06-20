const express = require('express')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')



const app = express()

logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(express.static('dist'))
app.use(express.json())
// app.use(middleware.requestLogger)

// app.use('/api/notes', notesRouter)
// app.use('/api/users', usersRouter)
// app.use('/api/login', loginRouter)



app.use(middleware.unknownEndpoint)
// app.use(middleware.errorHandler)

module.exports = app