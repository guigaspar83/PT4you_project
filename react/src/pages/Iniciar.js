import React from 'react';
import Header from '../Header';
import Main from '../Main';
import './style.css';


function Iniciar() {
 
  return (
    <div>
      <Header/>
        {Main(<>
                <div id="tituloPagina"><h2>Entrar</h2></div>
                <form action="">
                <div>
                    <div>
                        <div id="rowLabel_iniciar">
                            <label for="login">Username</label>
                        </div>
                        <div id="rowInput_iniciar">
                            <input type="email" id="login_iniciar" name="login" placeholder="username" />
                        </div>
                    </div>
                    <div>
                        <div id="rowLabel_iniciar">
                            <label for="pass">Password</label>
                        </div>
                        <div id="rowInput_iniciar">
                            <input type="password" id="pass_iniciar" name="passs" placeholder="password" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input id="btSubmit_iniciar" type="submit" value="Entrar"/>
                        </div>
                    </div>
                </div>
                </form>
        </>)}
    </div>
  );
}

export default Iniciar;