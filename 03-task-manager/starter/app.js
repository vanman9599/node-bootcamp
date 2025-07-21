const connectDB = require('./db/connect')
require('dotenv').config()

const express = require("express")
const app = express();
const tasks = require('./routes/tasks')
const port = 3000


app.use(express.json())

app.get('/hello', (req, res)=>{
  res.send("Task Manager App")
})

app.use('/api/v1/tasks', tasks)
const start = async () =>{
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, ()=>{
     console.log(`Server is listening on port: ${port}`)
    })
  }catch(err){
    console.log(err)
  }
}

// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')
start()