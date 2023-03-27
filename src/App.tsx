import pokemons from "@/mocks/pokemons";

import Button from "./components/Button";
import PokemonCard from "./features/pokemons/components/PokemonCard";

import "./globals.scss";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <Button variant="primary" onClick={() => alert("Hello world")}>
        Click
      </Button>
      <div className={styles.app}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}