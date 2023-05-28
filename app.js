const express = require('express')
const app = express()


app.use(express.static('public'));



app.get('/', (req, res) => {
  res.send('Home Page')
});

app.get('/hola mundo', (req, res) => {
  res.send('Hello World en su respectivo route')
});

app.get('*', (req, res) => {
  res.send('404 Not found')
});

app.get('*', (req, res) => {
  res.sendFile(__dirname+ '/public/404.html')
});



app.listen(3000)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}}`)
})