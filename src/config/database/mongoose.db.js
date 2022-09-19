const mongoose = require('mongoose')
const { MONGOOSE_CONNECTION } = require('./../../common')

mongoose.connect(MONGOOSE_CONNECTION, { useNewUrlParser: true })

module.exports = mongoose
