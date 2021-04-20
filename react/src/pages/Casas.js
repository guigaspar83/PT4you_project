import React, {useEffect, useState} from 'react';
import Header from '../Header';
import axios from 'axios';
import './style.css';

function Casas(){

    const [distritos, setDistritos] = useState([]);

    const [campos, setCampos] = useState({
        rua: '',
        num: '',
        complemento: '',
        distrito: '',
        concelho: '',
        codpostal: '',
        pais: '',
        tipo: '',
        tipologia: '',
        num_camas: '',
        num_banho: '',
        ar_cond: '',
        animais: '',
        cozinha: '',
        tv: '',
        wifi: '',
        fumar: '',
        descrcao: '',
        hora_checkin: '',
        hora_checkout: '' 
    });
    
    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }
 
    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3033/casas', campos).then(response => {
        console.log(campos);
        })
    }
    
    useEffect(() => {
        axios.get('http://localhost:3030/distritos').then(response => {
            setDistritos(response.data);
        })
    }, []);

    return(
        <div>
            
            <Header title="React form"/>
            <main id="main">
                    <div id="mainContainer">
                        <h2 id="h2">Adionar Casas</h2>
                        <form class="form" action="" onSubmit={handleFormSubmit}>
                        <div class="row">
                                <div class="rowLabel">
                                    <label for="rua">Rua</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Form" name="rua" placeholder="Digite a sua morada..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="num">Numero</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Form" name="num" placeholder="Digite o seu número de porta..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="complemento">Complemento</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Form" name="complemento" placeholder="Digite o complemento da morada..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="distrito">Distrito</label>
                                </div>
                                <div class="rowInput">
                                    <select name="distrito" id="inputTextBox_Form" onChange={handleInputChange} >
                                        <option value="0">Selecione uma opção</option>
                                        {distritos.map(estado => (<option key={estado.id} value={estado.dt}>{estado.dt}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="concelho">Concelho</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Form" name="concelho" placeholder="Digite o seu Concelho..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="codpostal">Código Postal</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Form" name="codpostal" placeholder="Digite o seu código postal..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="pais">País</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Form" name="pais" placeholder="Digite o seu País..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row" >
                                <div class="rowLabel" >
                                    <label for="tipo">Tipo de casa</label>
                                </div>
                                <div class="rowInput" >
                                    <select name="tipo" id="inputTextBox_Form" onChange={handleInputChange} >
                                        <option value="0">Selecione uma opção</option>
                                        <option value="Casa">Casa</option>
                                        <option value="Apartamento">Apartamento</option>
                                        <option value="Casa de Praia">Casa de Praia</option>
                                        <option value="Casa Rural">Casa Rural</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row"  >
                                <div class="rowLabel" >
                                    <label for="tipologia">Tipologia</label>
                                </div>
                                <div class="rowInput" >
                                    <input type="text" id="inputTextBox_Form" name="tipologia" placeholder="Tipologia da casa..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="num_camas">Número de camas</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Form" name="num_camas" placeholder="Número de camas da casa..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="num_banho">Número de casas de banho</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Form" name="num_banho" placeholder="Número de casas de banho da sua casa..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="ar_cond">Ar condicionado</label>
                                </div>
                                <div class="rowInput">
                                    <select name="ar_cond" id="inputTextBox_Registo" onChange={handleInputChange} >
                                        <option value="0">Selecione uma opção</option>
                                        <option value="1" >Sim</option>
                                        <option value="0" >Não</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="animais">Animais</label>
                                </div>
                                <div class="rowInput">
                                <select name="animais" id="inputTextBox_Registo" onChange={handleInputChange} >
                                        <option value="0">Selecione uma opção</option>
                                        <option value="1" >Sim</option>
                                        <option value="0" >Não</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="cozinha">Cozinha</label>
                                </div>
                                <div class="rowInput">
                                <select name="cozinha" id="inputTextBox_Registo" onChange={handleInputChange} >
                                        <option value="0">Selecione uma opção</option>
                                        <option value="1" >Sim</option>
                                        <option value="0" >Não</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="tv">TV</label>
                                </div>
                                <div class="rowInput">
                                <select name="tv" id="inputTextBox_Registo" onChange={handleInputChange} >
                                        <option value="0">Selecione uma opção</option>
                                        <option value="1" >Sim</option>
                                        <option value="0" >Não</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="wifi">Wi-fi</label>
                                </div>
                                <div class="rowInput">
                                <select name="wifi" id="inputTextBox_Registo" onChange={handleInputChange} >
                                        <option value="0">Selecione uma opção</option>
                                        <option value="1" >Sim</option>
                                        <option value="0" >Não</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="fumar">Fumadores</label>
                                </div>
                                <div class="rowInput">
                                <select name="fumar" id="inputTextBox_Registo" onChange={handleInputChange} >
                                        <option value="0">Selecione uma opção</option>
                                        <option value="1" >Sim</option>
                                        <option value="0" >Não</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="checkin">Hora de Check-in</label>
                                </div>
                                <div class="rowInput">
                                <input type="time" id="inputTextBox_Form" name="hora_checkin" placeholder="Digite a hora de check-in..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="checkout">Hora de check-out</label>
                                </div>
                                <div class="rowInput">
                                <input type="time" id="inputTextBox_Form" name="hora_checkout" placeholder="Digite a hora de check-out..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="descricao">Descrição</label>
                                </div>
                                <div class="rowInput">
                                <textarea name="descricao" rows="5" cols="300" placeholder="Digite uma descrição da casa (até 250 caracteres)" onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div>
                                    <input id="btSubmit" type="submit" value="Enviar"/>
                                    <input type="reset" value="Reset"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
        </div>
    )

}

export default Casas;