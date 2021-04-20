const postsData = require('../data/postsData');

// Funções para Tabela Moradas

exports.getMoradas = function(){
    return postsData.getMoradas();
};

exports.getMorada = function (id) {
    return postsData.getMorada(id);
}

exports.saveMorada = function(post) {
    return postsData.saveMorada(post);
};

exports.deleteMorada = function(id) {
    return postsData.deleteMorada(id);
};

exports.updateMorada = function (id, post) {
    return postsData.updateMorada(id, post);
}

// Funções para tabela Proprietarios

exports.getProprietarios = function(){
    return postsData.getProprietarios();
};

exports.getProprietario = function (id) {
    return postsData.getProprietario(id);
}

exports.saveProprietario = function(post) {
    return postsData.saveProprietario(post);
};

exports.deleteProprietario = function(id) {
    return postsData.deleteProprietario(id);
};

exports.updateProprietario = function (id, post) {
    return postsData.updateProprietario(id, post);
}

// Funções para tabela Hospedes

exports.getHospedes = function(){
    return postsData.getHospedes();
};

exports.getHospede = function (id) {
    return postsData.getHospede(id);
}

exports.saveHospede = function(post) {
    return postsData.saveHospede(post);
};

exports.deleteHospede = function(id) {
    return postsData.deleteHospede(id);
};

exports.updateHospede = function (id, post) {
    return postsData.updateHospede(id, post);
}

// Funções para tabela Propriedades

exports.getPropriedades = function(){
    return postsData.getPropriedades();
};

exports.getPropriedade = function (id) {
    return postsData.getPropriedade(id);
};

exports.savePropriedade = function(post) {
    return postsData.savePropriedade(post);
};

exports.deletePropriedade = function(id) {
    return postsData.deletePropriedade(id);
};

exports.updatePropriedade = function (id, post) {
    return postsData.updatePropriedade(id, post);
};

//Verifica User

exports.verificauser = function(id) {
    return postsData.verificauser(id);
};

exports.savemail = function(post) {
    return postsData.savemail(post);
};

exports.postPesquisa = function(post) {
    return postsData.postPesquisa(post);
}