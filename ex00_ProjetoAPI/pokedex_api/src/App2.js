import { useState, useEffect } from 'react';
import './style.css';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonName, setPokemonName] = useState("");

  function loadAPI(name){
    let url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
    fetch(url)
      .then(response => response.json())
      .then(res => {
        console.log(res);
        setPokemon(res);
      })
      .catch(err => console.log(err));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loadAPI(pokemonName);
  }

  useEffect(() => {
    // Carrega o Pokémon Ditto por padrão
    loadAPI("dragonite");
  }, []);

  return (
    <div className="container">
      <header>
        <strong>POKÉDEX</strong>
      </header>
      
      <form className="search"onSubmit={handleSubmit}>

         <br></br>

        <input 
          type="text" 
          value={pokemonName} 
          onChange={(e) => setPokemonName(e.target.value)} 
          placeholder="Pesquisar" 
          required 
        />

        <button type="submit">Pesquisar</button>
      </form>

      <div className="pokemon-info">
        <div className="pokemon-number">
          <div># {pokemon.id}</div>
        </div>
        <div className="pokemon-name">

          <div>{pokemon.name}</div>
        </div>
      </div>
      <div className="pokemon-details">
        <div className="pokemon-image">
          <img src={pokemon.sprites && pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
        </div>
        <div className="pokemon-stats">
          <div><strong>PESO:</strong> {pokemon.weight / 10} KG.</div>
          <div><strong>ALTURA:</strong> {pokemon.height / 10} M.</div>
          <div><strong>TIPO:</strong> {pokemon.types && pokemon.types.map(type => type.type.name).join(', ')}</div>
          <div><strong>HABILIDADES:</strong> {pokemon.ability} </div>
        </div>
      </div>
    </div>
  );
}

export default App;
