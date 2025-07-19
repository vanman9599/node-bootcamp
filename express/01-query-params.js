const express = require('express');
const app = express();
const path = require('path');
const {products} = require('./data')

const port = 5000

app.get('/', (req,res)=>{
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req,res)=>{

  const newProducts = products.map((product)=>{
    const {id,name,image} = product;
    return {id, name,image}
  })
  res.json(newProducts)
})

app.get('/api/products/:productID', (req,res)=>{
  // console.log(req);
  // console.log(req.params)
  const {productID} = req.params;

  const singleProduct = products.find((product)=>product.id === Number(productID))
  if(!singleProduct){
    return res.status(404).send('Product does not exist')
  }
  res.json(singleProduct)
  })

app.get('/api/v1/query',(req, res)=>{
  console.log(req.query)
  const {search, limit} = req.query;
  let sortedProducts = [...products];
  if(search){
    sortedProducts = sortedProducts.filter((product)=>{
      return product.name.startsWith(search)
    })
    
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0,Number(limit))
  }
  if(sortedProducts.length < 1){
    return res.status(200).json({success:true, data: []})
  }
  return res.status(200).json(sortedProducts)
  
})


// app.get('/', (req, res)=>{
//  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res)=>{
  res.status(404).send('Resource not found')
})
app.listen(port, ()=>{
  console.log(`Server listening on port: ${port}...`)
})