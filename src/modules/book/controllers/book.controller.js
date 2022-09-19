class BookController {
  createBook (req, res) {
    res.send('Create book')
  }

  getBooks (req, res) {
    res.send('Get book')
  }
}

module.exports = BookController