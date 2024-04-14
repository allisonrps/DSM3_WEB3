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
        return '#eeff00';
      case 'normal':
        return '#dfdfdf';
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

  const formatStatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div
      className="pokemon-card-full"
      style={{
        backgroundColor: determineBackgroundColor(pokemon.types),
        backgroundImage: `url(${pokemon.sprites.other['official-artwork'].front_default})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '350px',
        height: '550px',
        maxHeight: '700px',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Removi espaços entre os valores rgba
        boxSizing: 'border-box',
      }}
    >
      <div className="pokemon-details">
        <div className="pokemon-info">
          <div className="pokemon-number-name"></div>
          <div className="pokemon-stats">
            <div>
              <strong>TYPE:</strong> {pokemon.types.map((type) => type.type.name).join(', ')}
            </div>
            <div>
              <strong>ABILITIES:</strong> {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}
            </div>
            <div>
              <strong>HEIGHT:</strong> {pokemon.height / 10} m
            </div>
            <div>
              <strong>WEIGHT:</strong> {pokemon.weight / 10} kg
            </div>
            <div>
              <strong>ATTACKS:</strong>
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
