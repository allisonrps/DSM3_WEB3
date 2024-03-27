import React from 'react';

function Card({ pokemon }) {
  return (
    <div className="pokemon-card">
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
          <img
            src={pokemon.sprites && pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="pokemon-stats">
          <div><strong>PESO:</strong> {pokemon.weight / 10} KG.</div>
          <div><strong>ALTURA:</strong> {pokemon.height / 10} M.</div>
          <div><strong>TIPO:</strong> {pokemon.types && pokemon.types.map(type => type.type.name).join(', ')}</div>
          <div><strong>HABILIDADES:</strong> {pokemon.abilities && pokemon.abilities.map(ability => ability.ability.name).join(', ')}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
