const axios = require("axios");
const crypto = require('crypto');
const postsService = require('../service/postService');

const generate = function () {
    return crypto.randomBytes(10).toString('hex').slice(0, 10);
}

const request = function (url, method, data) {
    return axios ({ url, method, data });
};

test('should get posts', async function() {
    //const post1 = await postsService.savePost({title: generate(), content: generate() });
    //const post2 = await postsService.savePost({title: generate(), content: generate() });
    //const post3 = await postsService.savePost({title: generate(), content: generate() });
    //const response = await request ('http://localhost:3000/posts', 'get');
    //const posts = response.data;
    const posts = await postsService.getMoradas();
    console.log(posts);
    
    //expect(posts).toHaveLength(3);

    //await postsService.deletePost(post1.id);
    //await postsService.deletePost(post2.id);
    //await postsService.deletePost(post3.id);

});

test('should save a posts', async function() {
    const data = {rua: generate(), num: "10", complemento: generate(), distrito: generate(), concelho: generate(), codpostal: "1234567", pais: generate() };
    const response = await request ('http://localhost:3000/posts', 'post', data);
    const post = response.data;
    //expect(post.title).toBe(data.title);
    //expect(post.content).toBe(data.content);
    console.log(post);
    
    await postsService.deleteMorada(post.id_morada);

});

test('should update a posts', async function() {
    const post = await postsService.saveMorada({rua: generate(), num: "10", complemento: generate(), distrito: generate(), concelho: generate(), codpostal: "1234567", pais: generate() });
    console.log(post)
    post.rua = generate();
    post.num = "25";
    post.complemento = generate();
    post.distrito = generate();
    post.concelho = generate();
    post.codpostal = "5243625";
    post.pais = generate();

    await request (`http://localhost:3000/posts/${post.id_morada}`, 'put', post);
    const updatedPost = await postsService.getMorada(post.id_morada);
    //expect(updatedPost.title).toBe(post.title);
    //expect(updatedPost.content).toBe(post.content);
    
    console.log(updatedPost);

    await postsService.deleteMorada(post.id_morada);

});

test('should delete a posts', async function() {
    const post = await postsService.saveMorada({title: generate(), content: generate() });
    await request (`http://localhost:3000/posts/${post.id}`, 'delete');
    const posts = await postsService.getMorada();
    expect(posts).toHaveLength(0);
});

// Testes para Proprietarios

test('should get posts', async function() {
    //const post1 = await postsService.savePost({title: generate(), content: generate() });
    //const post2 = await postsService.savePost({title: generate(), content: generate() });
    //const post3 = await postsService.savePost({title: generate(), content: generate() });
    //const response = await request ('http://localhost:3000/posts', 'get');
    //const posts = response.data;
    const posts = await postsService.getProprietarios();
    console.log(posts);
    
    //expect(posts).toHaveLength(3);

    //await postsService.deletePost(post1.id);
    //await postsService.deletePost(post2.id);
    //await postsService.deletePost(post3.id);

});

test('should save a posts', async function() {
    const data = {fnome: generate(), snome: generate(), licenca: generate(), nif: generate(), mail: generate(), tel: generate(), password: generate() };
    const response = await request ('http://localhost:3000/proprietario', 'post', data);
    const post = response.data;
    //expect(post.title).toBe(data.title);
    //expect(post.content).toBe(data.content);
    console.log(post);
    
    await postsService.deleteProprietario(post.id_prop);

});

test('should update a posts', async function() {
    const post = await postsService.saveProprietario({fnome: generate(), snome: generate(), licenca: generate(), nif: generate(), mail: generate(), tel: generate(), password: generate() });
    console.log(post)
    
    post.fnome = generate();
    post.snome = generate();
    post.licenca = generate();
    post.nif = generate();
    post.mail = generate();
    post.tel = generate();
    post.password = generate();

    await request (`http://localhost:3000/proprietario/${post.id_prop}`, 'put', post);
    const updatedPost = await postsService.getProprietario(post.id_prop);
    //expect(updatedPost.title).toBe(post.title);
    //expect(updatedPost.content).toBe(post.content);
    
    console.log(updatedPost);

    await postsService.deleteProprietario(post.id_prop);

});

test('should delete a posts', async function() {
    const post = await postsService.saveMorada({title: generate(), content: generate() });
    await request (`http://localhost:3000/posts/${post.id}`, 'delete');
    const posts = await postsService.getMorada();
    expect(posts).toHaveLength(0);
});

// Testes para Hospedes

test('should get posts', async function() {
    //const post1 = await postsService.savePost({title: generate(), content: generate() });
    //const post2 = await postsService.savePost({title: generate(), content: generate() });
    //const post3 = await postsService.savePost({title: generate(), content: generate() });
    //const response = await request ('http://localhost:3000/posts', 'get');
    //const posts = response.data;
    const posts = await postsService.getHospedes();
    console.log(posts);
    
    //expect(posts).toHaveLength(3);

    //await postsService.deletePost(post1.id);
    //await postsService.deletePost(post2.id);
    //await postsService.deletePost(post3.id);

});

test('should save a posts', async function() {
    const data = {fnome: generate(), snome: generate(), tipo_doc: generate(), documento: generate(), nif: generate(), mail: generate(), tel: generate(), nacionalidade: generate(), password: generate() };
    const response = await request ('http://localhost:3000/hospede', 'post', data);
    const post = response.data;
    //expect(post.title).toBe(data.title);
    //expect(post.content).toBe(data.content);
    console.log(post);
    
    //await postsService.deleteHospede(post.id_hosp);

});

test('should update a posts', async function() {
    const post = await postsService.saveHospede({fnome: generate(), snome: generate(), tipo_doc: generate(), documento: generate(), nif: generate(), mail: generate(), tel: generate(), nacionalidade: generate(), password: generate() });
    console.log(post)
    
    post.fnome = generate();
    post.snome = generate();
    post.tipo_doc = generate();
    post.tdocumento = generate();
    post.nif = generate();
    post.mail = generate();
    post.tel = generate();
    post.nacionalidade = generate();
    post.password = generate();

    await request (`http://localhost:3000/hospede/${post.id_hosp}`, 'put', post);
    const updatedPost = await postsService.getHospede(post.id_hosp);
    //expect(updatedPost.title).toBe(post.title);
    //expect(updatedPost.content).toBe(post.content);
    
    console.log(updatedPost);

    await postsService.deleteHospede(post.id_hosp);

});

test('should delete a posts', async function() {
    const post = await postsService.saveMorada({title: generate(), content: generate() });
    await request (`http://localhost:3000/posts/${post.id}`, 'delete');
    const posts = await postsService.getMorada();
    expect(posts).toHaveLength(0);
});

// Testes para Propriedades

test('should get posts', async function() {
    //const post1 = await postsService.savePost({title: generate(), content: generate() });
    //const post2 = await postsService.savePost({title: generate(), content: generate() });
    //const post3 = await postsService.savePost({title: generate(), content: generate() });
    //const response = await request ('http://localhost:3000/propriedade', 'get');
    //const posts = response.data;
    const posts = await postsService.getPropriedades();
    console.log(posts);
    
    //expect(posts).toHaveLength(3);

    //await postsService.deletePost(post1.id);
    //await postsService.deletePost(post2.id);
    //await postsService.deletePost(post3.id);

});

test('should save a posts', async function() {
    const data = {tipo: generate(), tipologia: "1", num_camas: "2", num_banho: "1", quartos: "1", ar_cond: "1", animais: "1", cozinha: "1", tv: "1", wifi: "1", fumar: "0", descricao: generate(), hora_checkin: "14:00", hora_checkout: "12:00" };
    const response = await request ('http://localhost:3000/propriedade', 'post', data);
    const post = response.data;
    //expect(post.title).toBe(data.title);
    //expect(post.content).toBe(data.content);
    console.log(post);
    
    //await postsService.deleteHospede(post.id_hosp);

});

test.only('should update a posts', async function() {
    const post = await postsService.savePropriedade({tipo: generate(), tipologia: "1", num_camas: "2", num_banho: "1", quartos: "1", ar_cond: "1", animais: "1", cozinha: "1", tv: "1", wifi: "1", fumar: "0", descricao: generate(), hora_checkin: "14:00", hora_checkout: "12:00" });
    console.log(post)
    
    post.tipo = generate();
    post.tipologia = "2";
    post.num_camas = "5";
    post.num_banho = "2";
    post.quartos = "2";
    post.ar_cond = "1";
    post.animais = "0";
    post.cozinha = "1";
    post.tv = "1";
    post.wifi = "1";
    post.fumar = "1";
    post.descricao = generate();
    post.hora_checkin = "14:00";
    post.hora_checkout = "12:00";

    await request (`http://localhost:3000/propriedade/${post.id_casa}`, 'put', post);
    const updatedPost = await postsService.getPropriedade(post.id_casa);
    //expect(updatedPost.title).toBe(post.title);
    //expect(updatedPost.content).toBe(post.content);
    
    console.log(updatedPost);

    await postsService.deletePropriedade(post.id_casa);

});

test('should delete a posts', async function() {
    const post = await postsService.savePropriedade({title: generate(), content: generate() });
    await request (`http://localhost:3000/propriedade/${post.id_casa}`, 'delete');
    const posts = await postsService.getPropriedade();
    expect(posts).toHaveLength(0);
});