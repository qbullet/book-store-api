const express = require('express')
const BookController = require('./controllers/book.controller')

const BookRouter = express.Router()
const bookController = new BookController()

BookRouter.get('/', bookController.getBooks)
BookRouter.post('/', bookController.createBook)

module.exports = BookRouter
