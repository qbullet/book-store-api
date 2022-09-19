const express = require('express')
const BookRouter = require('./modules/book/book.router')

const AppRouter = express()

AppRouter.use('/book', BookRouter)

module.exports = AppRouter
