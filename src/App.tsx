import React, { useState } from "react";
import { Botao } from "./components/Botao";

const App = () => {
  const [name, setName] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  let textoBtn='Clique aqui';

  const botaoEventAct =(txt: string)=>{
    alert("Frase do APP: " + txt);
  }

  return (
    <div>
      Nome:
      <input type='text' value={name} onChange={handleInput}/>
      <hr/>
      Seu nome é: {name}

      <div>
        <Botao text={textoBtn} clickFn={botaoEventAct}/>
      </div>

    </div>

    
  );
}

export default App;