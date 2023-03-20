import { useEffect, useState } from "react";

export default function usePokedex(pokemonName) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async (pokemon) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

      if (res.status !== 200) {
        setError("Pokemon non trovato");
        setData(null);
      } else {
        const json = await res.json();
        setData(json);
      }
    } catch (error) {
      setError("Pokemon non trovato");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon(pokemonName);
  }, [pokemonName]);

  return { data, error, loading };
}
