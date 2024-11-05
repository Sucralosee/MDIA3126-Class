import React from "react";

const Header = ({ onFetchPokemon }) => {
  return (
    <div className="header">
      <h1 className="header-title">Pokémon Data</h1>
      <button className="fetch-button" onClick={onFetchPokemon}>
        Fetch Pokémon
      </button>
    </div>
  );
};

export default Header;