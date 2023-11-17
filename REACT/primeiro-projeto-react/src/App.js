import logo from './logo.svg';
import './App.css';
import BoasVindas from './components/BoasVindas';
import Exemplo from './components/Exemplo';

function App() {
  return (
    <div className='App'>
      <BoasVindas />
      <Exemplo />
      <mensagem name="Guillermo" />
    </div>
  );
}

export default App;
