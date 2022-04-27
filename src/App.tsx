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
    <div>
      <h2>lista de presença</h2>
      <ul>
        {list.map((item, index)=>(
          <Pessoa key={index} data={item}/>
        ))}
      </ul>

    </div>

    
  );
}

export default App;