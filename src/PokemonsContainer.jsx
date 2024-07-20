import PokemonCard from './PokemonCard';
import { pokemons } from './pokemons';

const PokemonsContainer = () => {
  return (
    <div className='pokemons-container'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonsContainer;
