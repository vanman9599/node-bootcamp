const os = require('os')

console.log(os.userInfo())
console.log(os.uptime())
const currentOS = {
  name: os.type(),
  relase: os.release(), 
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOS)