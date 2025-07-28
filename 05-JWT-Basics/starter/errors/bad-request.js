
const  CustomAPIError  = require('./custom-error')
const {StatusCodes} = require('http-status-code')

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequestError