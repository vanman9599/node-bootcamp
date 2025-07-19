const express = require('express');
const router = express.Router();

router.post('/', (req, res)=>{
  const {name} = req.body;
  if(name){
    return res.status(400).send(`Welcome ${name}`)
  }
  console.log(req.body)
res.status(401).send('Plesae provide credentials')
});

module.exports = router;