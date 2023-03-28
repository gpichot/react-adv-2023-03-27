import pokemons from "@/mocks/pokemons";

import PokemonCard from "./PokemonCard";

import styles from "./PokemonList.module.scss";

export default function PokemonList() {
  return (
    <div className={styles.list}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
