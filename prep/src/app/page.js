"use client";
import "./page.css";
import { useState } from "react";
import Header from "../components/Header";
import PokemonContainer from "../components/PokemonContainer";
import NoData from "../components/NoData";
import Loading from "../components/Loading";

export default function Home() {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchPokemonData() {
    setLoading(true);
    try {
      const randomOffset = Math.floor(Math.random() * 898);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${randomOffset}`
      );
      const data = await response.json();
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();
          return {
            id: pokemonData.id,
            name: pokemonData.name,
            sprite: pokemonData.sprites.front_default,
            shiny: pokemonData.sprites.front_shiny,
            height: pokemonData.height,
            weight: pokemonData.weight,
          };
        })
      );
      setPokemonData(pokemonDetails);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container">
        <Header onFetchPokemon={fetchPokemonData} />
        {loading ? (
          <Loading />
        ) : pokemonData ? (
          <PokemonContainer data={pokemonData} />
        ) : (
          <NoData />
        )}
      </div>
    </>
  );
}