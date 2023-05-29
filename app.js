const express = require('express')
const hbs = require('hbs')
const app = express()
const port = 3000;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



app.use(express.static('public'));



app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Gato bonito',
    titulo:'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Gato bonito',
    titulo:'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Gato bonito',
    titulo:'Curso de Node'
  });
});


// app.get('/hola mundo', (req, res) => {
//   res.send('Hello World en su respectivo route')
// });

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