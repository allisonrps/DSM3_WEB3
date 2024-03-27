import React from 'react';

function Search({ pokemonName, setPokemonName, handleSubmit }) {
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Pesquisar"
        required
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
}

export default Search;
