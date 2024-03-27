import React, { useState, useEffect } from 'react';
import Header from './header.js';
import Search from './search.js';
import Card from './card.js';
import Footer from './footer.js';
import './style.css';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonName, setPokemonName] = useState("");

  function loadAPI(name) {
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

      <Header />
      <Search pokemonName={pokemonName} setPokemonName={setPokemonName} handleSubmit={handleSubmit} />
      <br></br>
      <Card pokemon={pokemon} />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
