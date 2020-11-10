const express = require('express')
const app = express()
const port = 3021

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile((__dirname + '/index.html'))
})


app.get('/about', (req, res) => {
    res.sendFile((__dirname + '/about.html'))
})


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${3021}`)
})