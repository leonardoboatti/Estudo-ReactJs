import React, { useState } from "react";
import { isTemplateTail } from "typescript";
import { Botao } from "./components/Botao";
import { Pessoa } from "./components/Pessoa";

const App = () => {
  const [name, setName] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  let textoBtn='Clique aqui';

  const botaoEventAct =(txt: string)=>{
    alert("Frase do APP: " + txt);
  }

  let list = [
    {name: 'Leo', age: 23},
    {name: 'Leo', age: 23},
    {name: 'Leo', age: 23}
  ];

  const [show, setShow] = useState(false);

  const handleClick = () =>{
    /*if(show){
      setShow(false);
    } else {
      setShow(true);
    }*///substituindo esse bloco por esse comando
    setShow(!show);
  }

  return (
    /*<div>
      Nome:
      <input type='text' value={name} onChange={handleInput}/>
      <hr/>
      Seu nome é: {name}

      <div>
        <Botao text={textoBtn} clickFn={botaoEventAct}/>
      </div>

    </div>*/
    /*<div>
      <h2>lista de presença</h2>
      <ul>
        {list.map((item, index)=>(
          <Pessoa key={index} data={item}/>
        ))}
      </ul>

    </div>*/
    <div>
      <button onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {show  && 
        <div>
          Palmeiras nao tem mundial
        </div>
      }

    </div>

    
  );
}

export default App;