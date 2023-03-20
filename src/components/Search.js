import React, { useRef } from "react";

export default function Search({ updatePokemon }) {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePokemon(formRef.current.search.value);
  };
  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input name="search" placeholder="search pokemon" />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
