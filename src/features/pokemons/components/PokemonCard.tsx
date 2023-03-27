import React from "react";
import classnames from "classnames";

import { PokemonDetail } from "../types";

import styles from "./PokemonCard.module.scss";

export default function PokemonCard({ pokemon }: { pokemon: PokemonDetail }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={classnames(styles.pokemonCard, styles.helloWorld, {
        [styles.pokemonCardHovered]: isHovered,
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className={styles.pokemonCardImage}
      />
      <div className={styles.pokemonCardName}>{pokemon.name}</div>
      <div className={styles.pokemonCardTypes}>
        {pokemon.types.map((x) => (
          <span key={x} className={styles.pokemonType}>
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}
