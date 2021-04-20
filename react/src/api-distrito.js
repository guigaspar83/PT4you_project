//api-distritos.js
var http = require('http'); 
const express = require('express');
const app = express();
app.use(require("cors")());
 
app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})
 
app.get('/distritos', (req, res, next) => { 
    console.log("Retornou todos distritos!");
    const ufs = [
        {id:1,dt:'Aveiro'},{id:2,dt:'Beja'},{id:3,dt:'Braga'},{id:4,dt:'Bragança'},{id:5,dt:'Castelo Branco'},{id:6,dt:'Coimbra'},{id:7,dt:'Évora'},{id:8,dt:'Faro'},{id:9,dt:'Guarda'},{id:10,dt:'Leiria'},{id:11,dt:'Lisboa'},{id:12,dt:'Portalegre'},{id:13,dt:'Porto'},{id:14,dt:'Santarém'},{id:15,dt:'Setúbal'},{id:16,dt:'Viana do Castelo'},{id:17,dt:'Vila Real'},{id:18,dt:'Viseu'}
    ]
    res.json(ufs);
}) 
 
var server = http.createServer(app); 
server.listen(3030);
console.log("Servidor na porta 3030...")