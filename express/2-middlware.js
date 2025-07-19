const express =  require('express');
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')
const port = 5000

//apply middleware to 'api' routes
// app.use('/api', [authorize, logger]);
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/',(req, res)=>{

res.send('Home')
})


app.get('/about', (req, res)=>{
  res.send('About')
})

app.get('/api/products', (req, res)=>{
  res.send('Prodcuts')
})

app.get('/api/items', (req, res)=>{
    res.send('Items')
})
// request => middleware => response
app.listen(port, ()=>{
  console.log(`Server is listening on port: ${port}`)
})