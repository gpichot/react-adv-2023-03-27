import React from "react";

interface PokedexContextType {
  pokemonIds: (number | string)[];
  addPokemon: (pokemonId: number | string) => void;
  removePokemon: (pokemonId: number | string) => void;
}

export const PokedexContext = React.createContext<
  PokedexContextType | undefined
>(undefined);

type PokedexState = {
  pokemons: (number | string)[];
};

function createInitialPokedex(): PokedexState {
  return { pokemons: [] };
}

type PokedexAction =
  | { type: "ADD_POKEMON"; payload: number | string }
  | { type: "REMOVE_POKEMON"; payload: number | string };

function pokedexReducer(state: PokedexState, action: PokedexAction) {
  switch (action.type) {
    case "ADD_POKEMON":
      return { ...state, pokemons: [...state.pokemons, action.payload] };
    case "REMOVE_POKEMON":
      return {
        ...state,
        pokemons: state.pokemons.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
}

export function addPokemon(
  dispatch: React.Dispatch<PokedexAction>,
  pokemonId: number | string
) {
  dispatch({ type: "ADD_POKEMON", payload: pokemonId });
}

export function removePokemon(
  dispatch: React.Dispatch<PokedexAction>,
  pokemonId: number | string
) {
  dispatch({ type: "REMOVE_POKEMON", payload: pokemonId });
}

export function PokedexProvider({ children }: { children: React.ReactNode }) {
  const [pokedex, dispatch] = React.useReducer(
    pokedexReducer,
    createInitialPokedex()
  );

  const contextValue = {
    pokemonIds: pokedex.pokemons,
    addPokemon: (pokemonId: number | string) => addPokemon(dispatch, pokemonId),
    removePokemon: (pokemonId: number | string) =>
      removePokemon(dispatch, pokemonId),
  };

  return (
    <PokedexContext.Provider value={contextValue}>
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
