import React from 'react';
import { Link } from 'react-router-dom';

function Card({ pokemon, onClick }) {
  if (!pokemon) {
    return null; // Retorna null se o objeto pokemon não estiver definido
  }

  const pokemonType = pokemon.types && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';
  
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
        return '#fff8c3'; 
      case 'bug':
        return '#A8B820'; 
      case 'fairy':
        return '#ff00bf'; 
      case 'dark':
        return '#555555'; 
      case 'fighting':
        return '#c50000'; 
      case 'steel':
        return '#858585'; 
      case 'ghost':
        return '#62007d'; 
      case 'dragon':
        return '#1792b1'; 
      case 'flying':
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

  const cardStyle = {
    backgroundColor: determineBackgroundColor(pokemonType),
  };

  return (
    <div className="pokemon-card" style={cardStyle} onClick={() => onClick(pokemon)}>
      <div className="pokemon-number" style={{ fontSize: '50px' }}>
        <strong>#{pokemon.id}</strong>
      </div>

      <div className="pokemon-info">
        <div className="pokemon-name">
          {pokemon.name}
        </div>
      </div>

      <div className="pokemon-image">
        <img
          src={pokemon.sprites && pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
        />
      </div>

      <Link to={`/pokemon/${pokemon.id}`} className="pokemon-card-link">DETALHES</Link>
    </div>
  );
}

export default Card;