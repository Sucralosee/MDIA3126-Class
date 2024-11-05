import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonContainer = ({ data }) => {
  return (
    <div className="pokemon-container">
      {data.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonContainer;