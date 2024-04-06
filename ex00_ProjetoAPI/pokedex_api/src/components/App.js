import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header.js';
import Search from './search.js';
import Card from './card.js';
import Footer from './footer.js';
import Generations from './generations.js';
import './style.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  function loadAPI(id) {
    if (!id) return Promise.resolve(null);
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pokemon1 = await loadAPI(pokemonName);
    const pokemon2 = await loadAPI(pokemonName);
    const pokemon3 = await loadAPI(pokemonName);
    setPokemonList([pokemon1, pokemon2, pokemon3]);
  }

  useEffect(() => {
    async function loadRandomPokemons() {
      const randomPokemons = [];
      for (let i = 0; i < 3; i++) {
        const randomPokemonId = Math.floor(Math.random() * 898) + 1;
        const pokemon = await loadAPI(randomPokemonId);
        randomPokemons.push(pokemon);
      }
      setPokemonList(randomPokemons);
    }
    loadRandomPokemons();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Generations />
        <Search pokemonName={pokemonName} setPokemonName={setPokemonName} handleSubmit={handleSubmit} />
        <div className="cards-container">
          {pokemonList.map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} style={{ width: '30%', margin: '0 10px' }} />
          ))}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
