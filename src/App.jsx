import PokemonsContainer from './PokemonsContainer';

import './style.css';

function App() {
  return (
    <div className='wrapper'>
      <h1 className='logo-pokemon'>포켓몬 도감</h1>

      <PokemonsContainer />
    </div>
  );
}

export default App;
