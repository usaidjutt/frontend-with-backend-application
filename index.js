const express = require('express')
const app = express()
require('dotenv').config()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/numberinfo',(req,res)=>{
    res.send('03091478012')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
