const {customError} = require('../middleware/error-handler')

const errorMiddleware = (err,req,res,next)=>{
  if(err instanceof CustomError){
    return res.status(err.statusCode).json({msg: err.messsage})
  }
  return res.status(500).json({msg: "Someting went wrong, please try again"})
}

module.exports = errorMiddleware;