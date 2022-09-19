const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  PORT: process.env.PORT,
  MONGOOSE_CONNECTION: process.env.MONGOOSE_CONNECTION
}
