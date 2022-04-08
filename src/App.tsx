import { Header } from './components/Header';
import { Photo } from './components/Photo';

const App = () => {

  return (
    <div>
      <Header title="Essse é um props"/>
      <Header title='Outro texto'/>

      Olá Mundo

      <Photo legend="Google">
        <img src="https://www.google.com.br/google.jpg" alt=""/>
      </Photo>
    </div>
  );
}

export default App;