const express =  require('express');
const app = express()
const people = require('./routes/people.js')
const port = 5000;
const auth = require('./routes/auth.js')
  
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json())

app.use('/api/people',people)
app.use('/login', auth)


app.listen(port, ()=>{
  console.log(`Server is listening on port: ${port}`)
})