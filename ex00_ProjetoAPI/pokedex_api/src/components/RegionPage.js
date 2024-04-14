import React, { useState, useEffect } from 'react';
import Card from './card.js';

function RegionPage({ region }) {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Carrega a lista de Pokémon da região especificada
    async function loadPokemonList() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${region}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    loadPokemonList();
  }, [region]);

  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon, index) => (
        <Card key={index} pokemonId={extractPokemonId(pokemon.url)} />
      ))}
    </div>
  );
}

function extractPokemonId(url) {
  // Extrai o ID do URL do Pokémon
  const parts = url.split('/');
  return parts[parts.length - 2];
}

export default RegionPage;
