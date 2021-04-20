import React, {useEffect, useState} from 'react';
import Header from '../Header';
import Main from '../Main';
import './style.css';
import axios from 'axios';

function Home() {

  const [campos, setCampos] = useState({
      concelho: '',
      checkin: '',
      checkout: '',
      quantos: '',
  });
  
  function handleInputChange(event){
      campos[event.target.name] = event.target.value;
      setCampos(campos);
  }
  
  function handleFormSubmit(event){
    event.preventDefault();
    const result = axios.post('http://localhost:3033/pesquisa2', campos).then(response => {

    })
}

  return (
    <div>
      <Header/>
      {Main(<>
        <div id="mainInputBox_Home">
          
              <div id="inputBox_Home1">
                  <label id="inputBoxLabel_Home" for="localizacao">Localização</label>
                  <input id="inputTextBox_Home" type="test"  name="concelho" placeholder="Para onde vai?" onChange={handleInputChange} />        
              </div>
              <div id="inputBox_Home2">
                  <label id="inputBoxLabel_Home" for="Checkin">Check-in</label>
                  <input id="inputTextBox_Home" type="date" name="checkin" placeholder="Inserir data de check-in" onChange={handleInputChange} />  
              </div>
              <div id="inputBox_Home3" >
                  <label id="inputBoxLabel_Home" for="checkout">Check-out</label>
                  <input id="inputTextBox_Home" type="date" name="checkout" placeholder="Inserir data de check-out" onChange={handleInputChange} />  
              </div>
              <div id="inputBox_Home4">
                  <label id="inputBoxLabel_Home" for="hospedes">Hóspedes</label>
                  <input id="inputTextBox_Home" type="number" name="quantos" placeholder="Quantos" min="1" max="15" onChange={handleInputChange} />  
              </div>
              <div>
                  <input type="submit" id="btPesquisar_Home" value="" onClick={handleFormSubmit} />
              </div>
        
      <div className="grid-container">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>

      </div>
        </div>
      </>)}


    </div>

  );
}

export default Home;