const express = require('express')
const AppRouter = require('./src/app.router')

const app = express()

app.use(AppRouter)

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      timestamp: new Date()
    }
  })
})

app.listen(3030, () => {
  console.log('app is running on port 3030')
})

module.exports = app