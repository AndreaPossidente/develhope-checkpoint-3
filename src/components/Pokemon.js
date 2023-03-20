import React, { useState } from "react";
import usePokedex from "../hooks/usePokedex";

export default function Pokemon({ pokemon }) {
  const { data, error, loading } = usePokedex(pokemon);
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <div>
      {loading && <h1>loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && (
        <>
          <div>Name: {pokemon}</div>
          <div>
            <img src={data.sprites.front_default} alt={pokemon} />
          </div>
          <div>Experience: {data.base_experience}</div>
          <div>
            Abilities:
            <ul>
              {data.abilities.map((item, index) => (
                <li key={index}>{item.ability.name}</li>
              ))}
            </ul>
          </div>
          <button onClick={() => setMoreInfo((prev) => !prev)}>
            More Info
          </button>
          {moreInfo && (
            <div>
              <div>
                Forms:
                <ul>
                  {data.forms.map((item, index) => (
                    <li key={"f" + index}>{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
