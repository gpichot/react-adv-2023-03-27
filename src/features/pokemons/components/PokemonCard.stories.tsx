import type { Meta, StoryObj } from "@storybook/react";

import pikachu from "@/mocks/pikachu";

import PokemonCard from "./PokemonCard";

const meta: Meta<typeof PokemonCard> = {
  title: "Pokemons/PokemonCard",
  component: PokemonCard,
  args: { pokemon: pikachu },
};

export default meta;

type Story = StoryObj<typeof PokemonCard>;

export const Pikachu: Story = {};
