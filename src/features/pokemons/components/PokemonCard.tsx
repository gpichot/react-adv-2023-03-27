import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import { Button } from "@/components";

import pokeballImage from "../pokeball.png";
import { usePokedexContext } from "../PokedexContext";
import { PokemonDetail } from "../types";

import styles from "./PokemonCard.module.scss";

export default function PokemonCard({ pokemon }: { pokemon: PokemonDetail }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const pokedex = usePokedexContext();
  const isCaptured = pokedex.isPokemonCaptured(pokemon.id);

  const handleCapture = () => {
    if (isCaptured) {
      pokedex.removePokemon(pokemon.id);
    } else {
      pokedex.addPokemon(pokemon.id);
    }
  };

  return (
    <div
      className={classnames(styles.pokemonCard, styles.helloWorld, {
        [styles.pokemonCardHovered]: isHovered,
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.pokemonCardImage}>
        {isCaptured && (
          <img
            src={pokeballImage}
            alt="pokeball"
            className={styles.pokeballImage}
          />
        )}
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className={styles.pokemonCardImage}
        />
      </div>
      <div className={styles.pokemonCardName}>{pokemon.name}</div>
      <div className={styles.pokemonCardTypes}>
        {pokemon.types.map((x) => (
          <span key={x} className={styles.pokemonType}>
            {x}
          </span>
        ))}
      </div>
      <Link to={`/pokemons/${pokemon.id}`} className={styles.detailsButton}>
        View details
      </Link>
      <Button
        className={styles.pokemonCardButton}
        variant={isCaptured ? "secondary" : "primary"}
        onClick={handleCapture}
      >
        {isCaptured ? "Release" : "Capture"}
      </Button>
    </div>
  );
}
