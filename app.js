const http = require('http');





http.createServer((req,res) => {
    console.log(req);
    res.write('Hola mundo');
    res.end();
})
.listen(3000);


console.log('Escuchando en puero 3000')