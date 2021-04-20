//api-Validamail.js
var http = require('http'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postsService = require('../server/service/postService');
const axios = require("axios");
var nodemailer = require('nodemailer');

app.use(require("cors")());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

const request = function (url, method, data) {
    return axios ({ url, method, data });
};

var remetente = nodemailer.createTransport({
    host: 'smtp.office365.com',
    service: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth:{
    user: 'pt4you_projecto@outlook.pt',
    pass: 'upSkill123' }
    });

app.post('/validamail', async function (req, res) { 

    console.log("Registo recebido!");
  
    const dados = req.body;
    /*const testeuser ={
        licenca: req.body.licenca,
        numdoc: req.body.numdoc
    };*/
    console.log(req.body.licenca);
    console.log(req.body.numdoc);
    
    
    if (req.body.licenca == undefined){
        console.log('if');
        var test = {
            mail: req.body.mail,
            password: req.body.password,
            tipo_user: 'hospede'
        };
    } else {
        console.log('else');
        var test = {
            mail: req.body.mail,
            password: req.body.password,
            tipo_user: 'anfitriao'
        }; 
    };

    console.log(test)
    console.log(test.id_mail);
    const test2 = req.body.mail;
    const resp = await postsService.verificauser(test2);
    console.log(resp);
    
    if(resp == null) {
        await request ('http://localhost:3031/user', 'post', test)
        console.log('Inserido!')
            var emailASerEnviado = {
                from: 'pt4you_projecto@outlook.pt',
                to: test2,
                subject: 'Registo no site PT4You',
                text: `O seu registo foi efectuado com sucesso!! o seu username é ${test.mail} e a password é: ${test.password}`,
                };

                remetente.sendMail(emailASerEnviado, function(error){
                    if (error) {
                    console.log(error);
                    } else {
                    console.log('Email enviado com sucesso.');
                    console.log(emailASerEnviado.to);
                    }
                    });
        if(req.body.licenca == undefined){
            console.log('hospede');
            axios.post('http://localhost:3031/registo', dados);
        } else {
            console.log('anfitriao');
            axios.post('http://localhost:3031/anfitriao', dados);
        }
        
    } else {
        console.log('Utilizador já existe');
    };
});

var server = http.createServer(app); 
server.listen(3032);
console.log("Servidor na porta 3032...")