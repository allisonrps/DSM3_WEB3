// src/components/Card.js

import React from 'react';

function Card({ pokemon }) {
  // Obtendo o primeiro tipo do Pokémon e determinando a cor de fundo do card
  const pokemonType = pokemon.types && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';
  
  // Função para determinar a cor de fundo com base no tipo do Pokémon
  const determineBackgroundColor = (type) => {
    switch (type) {
      case 'grass':
        return '#78C850'; 
      case 'fire':
        return '#F08030'; 
      case 'water':
        return '#6890F0'; 
      case 'electric':
        return '#eeff00'; 
      case 'normal':
        return '#dfdfdf'; 
      case 'bug':
        return '#A8B820'; 
      case 'fairy':
        return '#ff00bf'; 
      case 'dark':
        return '#3c3c3c'; 
      case 'fighting':
        return '#c50000'; 
      case 'steel':
        return '#858585'; 
      case 'ghost':
        return '#62007d'; 
      case 'dragon':
        return '#1792b1'; 
      case 'flyer':
        return '#aaebff'; 
      case 'rock':
        return '#797462'; 
      case 'ground':
        return '#ab8600'; 
      case 'poison':
        return '#8b06d3'; 
      case 'psychic':
        return '#eb9cc9'; 
      case 'ice':
        return '#00c3ff'; 
      default:
        return '#ffffff'; // Cor padrão para outros tipos não listados
    }
  };

  // Estilo dinâmico para o card com base no tipo do Pokémon
  const cardStyle = {
    backgroundColor: determineBackgroundColor(pokemonType),
  };

  return (
    <div className="pokemon-card" style={cardStyle}>
      <div className="pokemon-info">
        <div className="pokemon-number-name">
          <div># {pokemon.id} {pokemon.name}</div>
        </div>
      </div>

      <div className="pokemon-image">
        <img
          src={pokemon.sprites && pokemon.sprites.other.home.front_default}
          alt={pokemon.name}
        />
      </div>

      {/* Removendo a seção de estatísticas do Pokémon */}
    </div>
  );
}

export default Card;
