import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-info">
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img src={pokemon.sprite} alt={pokemon.name} className="pokemon-sprite" />
      </div>
      <div className="shiny-info">
        <h3 className="shiny-title">Shiny Version</h3>
        <img src={pokemon.shiny} alt={`${pokemon.name} shiny`} className="pokemon-sprite" />
      </div>
      <div className="height-weight">
        <p>Height: {pokemon.height}m | Weight: {pokemon.weight}kg</p>
      </div>
    </div>
  );
};

export default PokemonCard;