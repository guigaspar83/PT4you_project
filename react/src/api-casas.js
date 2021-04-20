//api-registo.js
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

app.post('/casas', async function (req, res) { 

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
        tipo: req.body.tipo,
        tipologia: parseInt(req.body.tipologia),
        num_camas: parseInt(req.body.num_camas),
        num_banho: parseInt(req.body.num_banho),
        ar_cond: req.body.ar_cond,
        animais: req.body.animais,
        cozinha: req.body.cozinha,
        tv: req.body.tv,
        wifi: req.body.wifi,
        fumar: req.body.fumar,
        descricao: req.body.descricao,
        hora_checkin: req.body.hora_checkin,
        hora_checkout: req.body.hora_checkout,
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
    const response2 = await request ('http://localhost:3031/propriedade', 'post', data2);
    const post2 = response2.data2;
}) 

app.post('/pesquisa2', async function (req, res) { 

    console.log("Registo recebido!");

    /*var  data = {
        rua: req.body.rua, 
        num: parseInt(req.body.num), 
        complemento: req.body.complemento,
        distrito: req.body.distrito,
        concelho: req.body.concelho,
        codpostal: parseInt(req.body.codpostal),
        pais: req.body.pais
    };

   var  data2 = {
        tipo: req.body.tipo,
        tipologia: parseInt(req.body.tipologia),
        num_camas: parseInt(req.body.num_camas),
        num_banho: parseInt(req.body.num_banho),
        ar_cond: req.body.ar_cond,
        animais: req.body.animais,
        cozinha: req.body.cozinha,
        tv: req.body.tv,
        wifi: req.body.wifi,
        fumar: req.body.fumar,
        descricao: req.body.descricao,
        hora_checkin: req.body.hora_checkin,
        hora_checkout: req.body.hora_checkout,
    };*/
    const data2 = req.body;
    //console.log(data2);
    //console.log(data);
    //const t = data;
    //res.json({message: "Tudo ok por aqui!", dados: t});
    const response = await request ('http://localhost:3031/pesquisa', 'post', data2);
    console.log(response.data);


    /*data2.id_morada = response.data.id_morada;
    console.log(data2);
    const response2 = await request ('http://localhost:3031/propriedade', 'post', data2);
    const post2 = response2.data2;*/
}) 


app.use(express.json());
app.use('/', require('../server/route/postsRoute'));

var server = http.createServer(app); 
server.listen(3033);
console.log("Servidor na porta 3033...")