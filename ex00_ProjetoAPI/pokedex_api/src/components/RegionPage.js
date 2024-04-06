import React, { useState, useEffect } from 'react';
import Card from './card.js';

function RegionPage({ region }) {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Carrega a lista de Pokémon da região especificada
    async function loadPokemonList() {
      const url = `https://pokeapi.co/api/v2/pokemon/${region}`;
      const response = await fetch(url);
      const data = await response.json();
      setPokemonList(data.results);
    }
    loadPokemonList();
  }, [region]);

  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon, index) => (
        <Card key={index} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default RegionPage;
