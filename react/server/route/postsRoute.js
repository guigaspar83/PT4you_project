const express = require('express');
const { func } = require('../infra/database');
const router = express.Router();
const postsService = require('../service/postService');

// Rotas para Tabela Moradas

router.get('/posts', async function (req, res) {
    const posts = await postsService.getMoradas();
    res.json(posts);
});

router.post('/posts', async function(req, res) {
    const post = req.body;
    const newPost = await postsService.saveMorada(post);
    res.json(newPost);
});

router.put('/posts/:id', async function(req, res) {
    const post = req.body;
    await postsService.updateMorada(req.params.id, post);
    res.end();
});

router.delete('/posts/:id', async function(req, res) {
    await postsService.deleteMorada(req.params.id);
    res.end();
});

// Rotas para Tabela Proprietarios

router.get('/proprietario', async function (req, res) {
    const posts = await postsService.getProprietarios();
    res.json(posts);
});

router.post('/proprietario', async function(req, res) {
    const post = req.body;
    const newPost = await postsService.saveProprietario(post);
    res.json(newPost);
});

router.put('/proprietario/:id', async function(req, res) {
    const post = req.body;
    await postsService.updateProprietario(req.params.id, post);
    res.end();
});

router.delete('/proprietario/:id', async function(req, res) {
    await postsService.deleteProprietario(req.params.id);
    res.end();
});

// Rotas para Tabela Hospedes

router.get('/hospede', async function (req, res) {
    const posts = await postsService.getHospedes();
    res.json(posts);
});

router.post('/hospede', async function(req, res) {
    const post = req.body;
    const newPost = await postsService.saveHospede(post);
    res.json(newPost);
});

router.put('/hospede/:id', async function(req, res) {
    const post = req.body;
    await postsService.updateHospede(req.params.id, post);
    res.end();
});

router.delete('/hospede/:id', async function(req, res) {
    await postsService.deleteHospede(req.params.id);
    res.end();
});

// Rotas para Tabela Propriedades

router.get('/propriedade', async function (req, res) {
    const posts = await postsService.getPropriedades();
    res.json(posts);
});

router.post('/propriedade', async function(req, res) {
    const post = req.body;
    console.log('Entrou');
    const newPost = await postsService.savePropriedade(post);
    res.json(newPost);
});

router.put('/propriedade/:id', async function(req, res) {
    const post = req.body;
    await postsService.updatePropriedade(req.params.id, post);
    res.end();
});

router.delete('/propriedade/:id', async function(req, res) {
    await postsService.deletePropriedade(req.params.id);
    res.end();
});

router.post('/user', async function(req, res) {
    const post = req.body;
    console.log('Entrou');
    const newPost = await postsService.savemail(post);
    res.json(newPost);
});

router.post('/user', async function(req, res) {
    const post = req.body;
    console.log('Entrou');
    const newPost = await postsService.savemail(post);
    res.json(newPost);
});

router.post('/pesquisa', async function(req, res) {
    const post = req.body;
    console.log('Entrou pesquisa');
    const newPost = await postsService.postPesquisa(post);
    res.json(newPost);
});

module.exports = router;
