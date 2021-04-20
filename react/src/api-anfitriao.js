//api-anfitriao.js
var http = require('http'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postsService = require('../server/service/postService');
const axios = require("axios");
//const postsData = require('../data/postsData');

app.use(require("cors")());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

const request = function (url, method, data) {
    return axios ({ url, method, data });
};

app.post('/anfitriao', async function (req, res) { 

    console.log("Registo recebido!");

    var  data = {
        rua: req.body.rua, 
        num: parseInt(req.body.num), 
        complemento: req.body.complemento,
        distrito: req.body.distrito,
        concelho: req.body.concelho,
        codpostal: parseInt(req.body.codpostal),
        pais: req.body.pais
    };

   var  data2 = {
        fnome: req.body.firstname,
        snome: req.body.lastname, 
        licenca: req.body.licenca, 
        nif: req.body.nif, 
        mail: req.body.mail, 
        tel: req.body.tel, 
        password: req.body.password
    };
    
    console.log(data2);
    console.log(data);
    const t = data;
    res.json({message: "Tudo ok por aqui!", dados: t});
    const response = await request ('http://localhost:3031/posts', 'post', data);
    const post = response.data;
    console.log('AQUI');
    console.log(response.data);


    data2.id_morada = response.data.id_morada;
    console.log(data2);
    const response2 = await request ('http://localhost:3031/proprietario', 'post', data2);
    const post2 = response2.data2;
}) 

app.post('/registo', async function (req, res) { 

    console.log("Registo recebido!");

    var  data = {
        rua: req.body.rua, 
        num: parseInt(req.body.num), 
        complemento: req.body.complemento,
        distrito: req.body.distrito,
        concelho: req.body.concelho,
        codpostal: parseInt(req.body.codpostal),
        pais: req.body.pais
    };

   var  data2 = {
        fnome: req.body.firstname,
        snome: req.body.lastname, 
        tipo_doc: req.body.tipodoc,
        documento: req.body.numdoc,
        nif: req.body.nif, 
        mail: req.body.mail, 
        tel: req.body.tel,
        nacionalidade: req.body.nacionalidade, 
        password: req.body.password
    };

    console.log(data2);
    console.log(data);
    //const t = data;
    //res.json({message: "Tudo ok por aqui!", dados: t});
    const response = await request ('http://localhost:3031/posts', 'post', data);
    const post = response.data;
    console.log('AQUI');
    console.log(response.data);


    data2.id_morada = response.data.id_morada;
    console.log(data2);
    const response2 = await request ('http://localhost:3031/hospede', 'post', data2);
    const post2 = response2.data2;
}) 

app.use(express.json());
app.use('/', require('../server/route/postsRoute'));

var server = http.createServer(app); 
server.listen(3031);
console.log("Servidor na porta 3031...")