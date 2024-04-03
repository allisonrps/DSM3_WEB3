// src/components/Card.js

import React from 'react';

function Card({ pokemon }) {
  // Obtendo o primeiro tipo do Pokémon e determinando a cor de fundo do card
  const pokemonType = pokemon.types && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';
  
  // Função para determinar a cor de fundo com base no tipo do Pokémon
  const determineBackgroundColor = (type) => {
    switch (type) {
      case 'grass':
        return '#78C850'; // Verde
      case 'fire':
        return '#F08030'; // Vermelho
      case 'water':
        return '#6890F0'; // Azul
      case 'electric':
        return '#eeff00'; // Verde
      case 'normal':
        return '#dfdfdf'; // Verde
      case 'bug':
        return '#A8B820'; // Verde-claro
      case 'fairy':
        return '#ffafe7'; // Verde
      case 'dark':
        return '#3c3c3c'; // Verde
      case 'fighter':
        return '#c50000'; // Verde
      case 'steel':
        return '#858585'; // Verde
      case 'ghost':
        return '#62007d'; // Verde
      case 'dragon':
        return '#1792b1'; // Verde
      case 'flyer':
        return '#6de2ff'; // Verde
      case 'rock':
        return '#797462'; // Verde
      case 'ground':
        return '#ab8600'; // Verde
      case 'poison':
        return '#8b06d3'; // Verde
      case 'psychic':
        return '#eb9cc9'; // Verde
      // Adicione mais casos para outros tipos de Pokémon conforme necessário
      default:
        return '#A8A878'; // Cor padrão para outros tipos não listados
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
          src={pokemon.sprites && pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
      </div>

      {/* Removendo a seção de estatísticas do Pokémon */}
    </div>
  );
}

export default Card;
