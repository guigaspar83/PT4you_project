const { result } = require('../infra/database');
const database = require('../infra/database');

// Funções para Tabela Moradas

exports.getMoradas = function(){
    return database.query('select * from moradas');
};

exports.getMorada = function (id) {
    return database.oneOrNone('select * from moradas where id_morada = $1', [id]);
};

exports.saveMorada = function (post) {
    return database.one('insert into moradas (rua, num, complemento, distrito, concelho, codpostal, pais) values ($1, $2, $3, $4, $5, $6, $7) returning *', [post.rua, post.num, post.complemento, post.distrito, post.concelho, post.codpostal, post.pais]);
};

exports.updateMorada = function (id, post) {
    return database.none('update moradas set rua = $1, num = $2, complemento = $3, distrito = $4, concelho = $5, codpostal = $6, pais= $7 where id_morada = $8', [post.rua, post.num, post.complemento, post.distrito, post.concelho, post.codpostal, post.pais, id]);
};

exports.deleteMorada = function (id) {
    return database.none('delete from moradas where id_morada = $1', [id]);
};

// Funções para tabela Proprietarios

exports.getProprietarios = function(){
    return database.query('select * from proprietarios');
};

exports.getProprietario = function (id) {
    return database.oneOrNone('select * from proprietarios where id_prop = $1', [id]);
};

exports.saveProprietario = function (post) {
    return database.one('insert into proprietarios (fnome, snome, licenca, nif, mail, tel, password, id_morada) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *', [post.fnome, post.snome, post.licenca, post.nif, post.mail, post.tel, post.password, post.id_morada]);
};

exports.updateProprietario = function (id, post) {
    return database.none('update proprietarios set fnome = $1, snome = $2, licenca = $3, nif = $4, mail = $5, tel = $6, password = $7 where id_prop = $8', [post.fnome, post.snome, post.licenca, post.nif, post.mail, post.tel, post.password, id]);
};

exports.deleteProprietario = function (id) {
    return database.none('delete from proprietarios where id_prop = $1', [id]);
};

// Funções para tabela Hospedes

exports.getHospedes = function(){
    return database.query('select * from hospedes');
};

exports.getHospede = function (id) {
    return database.oneOrNone('select * from hospedes where id_hosp = $1', [id]);
};

exports.saveHospede = function (post) {
    return database.one('insert into hospedes (fnome, snome, tipo_doc, documento, nif, mail, tel, nacionalidade, password, id_morada) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *', [post.fnome, post.snome, post.tipo_doc, post.documento, post.nif, post.mail, post.tel, post.nacionalidade, post.password, post.id_morada]);
};

exports.updateHospede = function (id, post) {
    return database.none('update hospedes set fnome = $1, snome = $2, tipo_doc = $3, documento = $4, nif = $5, mail = $6, tel = $7, nacionalidade = $8, password = $9 where id_hosp = $10', [post.fnome, post.snome, post.tipo_doc, post.documento, post.nif, post.mail, post.tel, post.nacionalidade, post.password, id]);
};

exports.deleteHospede = function (id) {
    return database.none('delete from hospedes where id_hosp = $1', [id]);
};

// Funções para tabela Propriedades

exports.getPropriedades = function(){
    return database.query('select * from propriedades');
};

exports.getPropriedade = function (id) {
    return database.oneOrNone('select * from propriedades where id_casa = $1', [id]);
};

exports.savePropriedade = function (post) {
    return database.one('insert into propriedades (tipo, tipologia, num_camas, num_banho, ar_cond, animais, cozinha, tv, wifi, fumar, descricao, hora_checkin, hora_checkout, id_morada) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning *', [post.tipo, post.tipologia, post.num_camas, post.num_banho, post.ar_cond, post.animais, post.cozinha, post.tv, post.wifi, post.fumar, post.descricao, post.hora_checkin, post.hora_checkout, post.id_morada]);
};

exports.updatePropriedade = function (id, post) {
    return database.none('update propriedades set tipo = $1, tipologia = $2, num_banho = $3, ar_cond = $4, animais = $5, cozinha = $6, tv = $7, wifi = $8, fumar = $9, descricao = $10, hora_checkin = $11, hora_checkout = $12, id_morada = $13 where id_casa = $14', [post.tipo, post.tipologia, post.num_camas, post.num_banho, post.ar_cond, post.animais, post.cozinha, post.tv, post.wifi, post.fumar, post.descricao, post.hora_checkin, post.hora_checkout, post.id_morada, id]);
};

exports.deletePropriedade = function (id) {
    return database.none('delete from propriedades where id_casa = $1', [id]);
};

// Verifica user


exports.verificauser = function(id) {
    
    return database.oneOrNone('select id_mail from users where id_mail = $1', [id]);
}

exports.savemail = function(post) {
    return database.one('insert into users (id_mail, senha, tipo_user) values ($1, $2, $3) returning *', [post.mail, post.password, post.tipo_user]);
}


exports.postPesquisa = function (post) {
    return database.query('select * from propriedades where exists (select * from moradas where propriedades.id_morada = moradas.id_morada and moradas.concelho = $1)' , [post.concelho, post.tipo, post.tipologia, post.num_camas, post.num_banho, post.ar_cond, post.animais, post.cozinha, post.tv, post.wifi, post.fumar, post.descricao, post.hora_checkin, post.hora_checkout]);
}