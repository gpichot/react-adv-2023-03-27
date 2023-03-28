import React from "react";

interface PokedexContextType {
  pokemonIds: (number | string)[];
  addPokemon: (pokemonId: number | string) => void;
  removePokemon: (pokemonId: number | string) => void;
}

export const PokedexContext = React.createContext<
  PokedexContextType | undefined
>(undefined);

export function PokedexProvider({ children }: { children: React.ReactNode }) {
  const [pokemonIds, setPokemonIds] = React.useState<(number | string)[]>([]);

  const addPokemon = (pokemonId: number | string) => {
    setPokemonIds((currentPokemonIds) => [...currentPokemonIds, pokemonId]);
  };

  const removePokemon = (pokemonId: number | string) => {
    setPokemonIds((currentPokemonIds) =>
      currentPokemonIds.filter((id) => id !== pokemonId)
    );
  };

  return (
    <PokedexContext.Provider value={{ pokemonIds, addPokemon, removePokemon }}>
      {children}
    </PokedexContext.Provider>
  );
}

export function usePokedexContext() {
  const context = React.useContext(PokedexContext);

  if (!context) {
    throw new Error("usePokedex must be used within a PokedexProvider");
  }

  return {
    ...context,
    isPokemonCaptured: (pokemonId: number | string) =>
      context.pokemonIds.includes(pokemonId),
  };
}
