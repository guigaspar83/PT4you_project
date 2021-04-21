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
        licenca: '',
        nif: '',
        mail: '',
        tel: '',
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
        axios.post('http://localhost:3031/validamail', campos).then(response => {
        console.log(campos);
        })
    }
    
    useEffect(() => {
        axios.get('http://localhost:3031/distritos').then(response => {
            setDistritos(response.data);
        })
    }, []);

    return(
        <div>
            
            <Header title="React form"/>
            <main id="main">
                    <div id="mainContainer">
                        <h2 id="h2">Seja nosso Anfitrião</h2>
                        <form class="form" action="" onSubmit={handleFormSubmit}>
                            <div class="row" >
                                <div class="rowLabel" >
                                    <label for="nome">Primeiro Nome</label>
                                </div>
                                <div class="rowInput" >
                                    <input type="text" id="inputTextBox_Form" name="firstname" placeholder="Seu primeiro nome..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row"  >
                                <div class="rowLabel" >
                                    <label for="sobrenome">Último nome</label>
                                </div>
                                <div class="rowInput" >
                                    <input type="text" id="inputTextBox_Form" name="lastname" placeholder="Seu último nome..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="pass">Password</label>
                                </div>
                                <div class="rowInput">
                                    <input type="password" id="inputTextBox_Form" name="password" placeholder="Digite uma password..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="licenca">Licença</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Form" name="licenca" placeholder="Digite a sua Licença..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="nif">NIF</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Form" name="nif" placeholder="Digite o seu NIF..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="mail">E-mail</label>
                                </div>
                                <div class="rowInput">
                                    <input type="email" id="inputTextBox_Form" name="mail" placeholder="Digite o seu e-mail..." onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="rowLabel">
                                    <label for="tel">Telefone</label>
                                </div>
                                <div class="rowInput">
                                    <input type="text" id="inputTextBox_Form" name="tel" placeholder="Digite o seu telefone..." onChange={handleInputChange} />
                                </div>
                            </div>
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

export default Form;