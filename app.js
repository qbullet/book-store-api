const express = require('express')
const AppConfig = require('./src/app.config')
const AppRouter = require('./src/app.router')
const AppMiddleware = require('./src/app.middleware')

const app = express()

app.use(AppConfig)
app.use(AppMiddleware)
app.use(AppRouter)

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      timestamp: new Date()
    }
  })
})

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
})

module.exports = app