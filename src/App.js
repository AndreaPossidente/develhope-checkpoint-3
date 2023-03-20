import React, { useState } from "react";
import Pokemon from "./components/Pokemon";
import Search from "./components/Search";

export default function App() {
  const [pokemon, setPokemon] = useState(null);

  const updatePokemon = (name) => {
    setPokemon(name);
  };
  return (
    <div>
      <Search updatePokemon={updatePokemon} />
      {pokemon && <Pokemon pokemon={pokemon} />}
    </div>
  );
}
