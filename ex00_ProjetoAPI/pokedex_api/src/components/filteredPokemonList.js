import React, { useState, useEffect } from 'react';
import Card from './card.js';

function PokemonList({ allPokemon }) {
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPokemon([]);
    } else {
      const filtered = allPokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPokemon(filtered);
    }
  }, [searchTerm, allPokemon]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Aqui você pode fazer algo com o termo de pesquisa
  };

  return (
    <div>
      <Search
        pokemonName={searchTerm}
        setPokemonName={setSearchTerm}
        handleSubmit={handleSearch}
      />
      <div className="pokemon-list">
        {filteredPokemon.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
