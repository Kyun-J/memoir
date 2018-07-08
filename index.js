const express = require('express')
const app = express()

app.listen(8008)

app.use(express.static(__dirname));

app.get('/',(req,res,next) => {
  res.sendFile(__dirname+'/src/index.html')
})
