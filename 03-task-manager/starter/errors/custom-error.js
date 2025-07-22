class CustomError extends Error{
  constructor(message,statusCode){
    super(message)
    this.statusCode = statusCode
  }
}

const createCustomError = (msg,statusCode)=>{
  return new CustomError(msg,statusCode0)
}
module.exports = {createCustomError,CustomError}