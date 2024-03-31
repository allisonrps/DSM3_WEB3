import React from 'react';

function Search({ pokemonName, setPokemonName, handleSubmit }) {
  return (
    <form className="search form-inline" onSubmit={handleSubmit}>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        className="form-control mr-sm-2"
        placeholder="Pesquisar"
        required
      />
      <button type="submit" className="btn btn-light">Pesquisar</button>
    </form>
  );
}

export default Search;

