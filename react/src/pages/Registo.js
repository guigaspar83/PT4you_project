import React, {useEffect, useState} from 'react';
import Header from '../Header';
import axios from 'axios';
import './style.css';

function Form(){

    const [distritos, setDistritos] = useState([]);

    const [campos, setCampos] = useState({
        firstname: '',
        lastname: '',
        password: '',
        tipodoc: '',
        numdoc: '',
        nif: '',
        mail: '',
        tel: '',
        nacionalidade: '',
        rua: '',
        num: '',
        complemento: '',
        distrito: '',
        concelho: '',
        codpostal: '',
        pais: ''
    });
    
    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }
 
    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3032/validamail', campos).then(response => {
        console.log(campos);    
        alert(response.data.dados.length + ' registos!');
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
                        <h2 id="h2">Registe-se em PT4You</h2>
                        <form class="form" action="" onSubmit={handleFormSubmit}>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="nome">Primeiro Nome</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Registo" name="firstname" placeholder="Seu primeiro nome..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="sobrenome">Último nome</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Registo" name="lastname" placeholder="Seu último nome..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="pass">Password</label>
                                </div>
                                <div class="rowInput">
                                    <input type="password" id="inputTextBox_Registo" name="password" placeholder="Digite uma password..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="tipodoc">Tipo de Documento</label>
                                </div>
                                <div class="rowInput">
                                    <select name="tipodoc" id="inputTextBox_Registo" onChange={handleInputChange} >
                                        <option value="Cartão de Cidadão" selected>Cartão de Cidadão</option>
                                        <option value="Passaporte" >Passaporte</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="numdoc">Documento de Identificação</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Registo" name="numdoc" placeholder="Digite a seu documento (Cartão de Cidadão ou Passaporte)..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="nif">NIF</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Registo" name="nif" placeholder="Digite o seu NIF..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="mail">E-mail</label>
                                </div>
                                <div class="rowInput">
                                    <input type="email" id="inputTextBox_Registo" name="mail" placeholder="Digite o seu e-mail..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="tel">Telefone</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Registo" name="tel" placeholder="Digite o seu telefone..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="nacionalidade">Nacionalidade</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Registo" name="nacionalidade" placeholder="Digite a sua nacionalidade..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="rua">Rua</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Registo" name="rua" placeholder="Digite a sua morada..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="num">Numero</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Registo" name="num" placeholder="Digite o seu número de porta..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="complemento">Complemento</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Registo" name="complemento" placeholder="Digite o complemento da morada..." onChange={handleInputChange} />
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
                                    <input type="text" id="inputTextBox_Registo" name="concelho" placeholder="Digite o seu Concelho..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="codpostal">Código Postal</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Registo" name="codpostal" placeholder="Digite o seu código postal..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="pais">País</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Registo" name="pais" placeholder="Digite o seu País..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div>
                                    <input id="btSubmit" type="submit" value="Enviar"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
    
    )

}

export default Form;