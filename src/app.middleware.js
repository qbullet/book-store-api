const express = require('express')
const cors = require('cors')

const AppMiddleware = express()

AppMiddleware.use(express.urlencoded({ extended: true }))
AppMiddleware.use(express.json())
AppMiddleware.use(cors())

module.exports = AppMiddleware