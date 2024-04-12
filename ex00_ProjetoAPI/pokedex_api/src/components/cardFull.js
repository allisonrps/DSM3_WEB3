import React, { useState, useEffect } from 'react';

function CardFull({ pokemonId }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    loadPokemonDetails();
  }, [pokemonId]);

  const determineBackgroundColor = (types) => {
    const type = types && types.length > 0 ? types[0].type.name : '';
    switch (type) {
      case 'grass':
        return '#78C850';
      case 'fire':
        return '#F08030';
      case 'water':
        return '#6890F0';
      case 'electric':
        return '#FFD700';
      case 'normal':
        return '#A8A878';
      case 'bug':
        return '#A8B820';
      case 'fairy':
        return '#EE99AC';
      case 'dark':
        return '#705848';
      case 'fighting':
        return '#C03028';
      case 'steel':
        return '#B8B8D0';
      case 'ghost':
        return '#705898';
      case 'dragon':
        return '#7038F8';
      case 'flying':
        return '#A890F0';
      case 'rock':
        return '#B8A038';
      case 'ground':
        return '#E0C068';
      case 'poison':
        return '#A040A0';
      case 'psychic':
        return '#F85888';
      case 'ice':
        return '#98D8D8';
      default:
        return '#ffffff'; // Cor padrão para outros tipos não listados
    }
  };

  const formatStatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-card-full" style={{ backgroundColor: determineBackgroundColor(pokemon.types) }}>
      <div className="pokemon-image">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div className="pokemon-details">
        <div className="pokemon-info">
          <div className="pokemon-number-name">
            <div>
              <strong>#{pokemon.id}</strong> {pokemon.name}
            </div>
          </div>
          <div className="pokemon-stats">
            <div>
              <strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(', ')}
            </div>
            <div>
              <strong>Abilities:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}
            </div>
            <div>
              <strong>Height:</strong> {pokemon.height / 10} m
            </div>
            <div>
              <strong>Weight:</strong> {pokemon.weight / 10} kg
            </div>
            <div>
              <strong>Attacks:</strong> 
              <ul>
                {pokemon.moves.slice(0, 5).map((move, index) => (
                  <li key={index}>{move.move.name}</li>
                ))}
              </ul>
            </div>
            {pokemon.stats.map((stat, index) => (
              <div key={index}>
                <strong>{formatStatName(stat.stat.name)}:</strong> {stat.base_stat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFull;


