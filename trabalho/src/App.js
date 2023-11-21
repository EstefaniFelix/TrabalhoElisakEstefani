import './Media.css';
import Imagem from './img/escola.png'
import Media from './componentes/media';

function App() {
  return (
    <div className="App">
      <h1> Média </h1>
      <Media />
      <img className='imagem' src={Imagem} />
    </div>
  );
}

export default App;