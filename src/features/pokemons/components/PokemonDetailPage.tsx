import { useParams } from "react-router-dom";

import pokemons from "@/mocks/pokemons";

import { usePokedexContext } from "../PokedexContext";
import { PokemonDetail } from "../types";

import styles from "./PokemonDetailPage.module.scss";

export default function PokemonDetailPage() {
  const { pokemonId } = useParams<{ pokemonId: string }>();
  const pokemon = pokemons.find((pokemon) => String(pokemon.id) === pokemonId);
  const pokedex = usePokedexContext();

  if (!pokemon) {
    return <p>Pokemon not found</p>;
  }

  const isCaptured = pokedex.isPokemonCaptured(pokemon.id);

  return (
    <div>
      <h1>
        {pokemon.name} {isCaptured && "(captured)"}
      </h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Type: {pokemon.types.join(", ")}</p>
      <p>Width: {pokemon.weight}</p>
      <p>Height: {pokemon.height}</p>
      <div>
        <h2>Stats</h2>
        <PokemonStatsGroup stats={pokemon.stats} />
      </div>
    </div>
  );
}

function getLabelFromStatName(statName: string) {
  if (statName === "hp") return "HP";
  if (statName === "attack") return "Attack";
  if (statName === "defense") return "Defense";
  if (statName === "special-attack") return "Special Attack";
  if (statName === "special-defense") return "Special Defense";
  if (statName === "speed") return "Speed";
}

function PokemonStatsGroup({ stats }: { stats: PokemonDetail["stats"] }) {
  return (
    <div className={styles.pokemonStatsGroup}>
      {Object.entries(stats).map(([statName, statValue]) => (
        <div key={statName} className={styles.pokemonStatsGroupItem}>
          <div className={styles.pokemonStatsGroupItemValue}>{statValue}</div>
          <div className={styles.pokemonStatsGroupItemLabel}>
            {getLabelFromStatName(statName)}
          </div>
        </div>
      ))}
    </div>
  );
}
