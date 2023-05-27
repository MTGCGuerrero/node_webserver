const http = require('http');





http.createServer((req,res) => {
    /*console.log(req); */
    res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    res.writeHead(200,{'Content-Type':'application/csv'});
    res.write('id, nombre\n');
    res.write('2, Fernando\n');
    res.write('3, Maria\n');
    res.write('4, Juan\n');
    res.write('5, Pedro\n');
    res.end();
})
.listen(3000);


console.log('Escuchando en puero 3000')