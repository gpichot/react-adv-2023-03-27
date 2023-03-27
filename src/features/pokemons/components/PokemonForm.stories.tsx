import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import PokemonForm from "./PokemonForm";

const meta: Meta<typeof PokemonForm> = {
  title: "Pokemons/PokemonForm",
  component: PokemonForm,
  argTypes: {
    onSubmit: {
      action: "onSubmit",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PokemonForm>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameInput = canvas.getByLabelText("Name");
    const typeInput = canvas.getByLabelText("Type");
    const widthInput = canvas.getByLabelText("Width");
    const heightInput = canvas.getByLabelText("Height");

    await userEvent.type(nameInput, "Pikachu", { delay: 100 });
    await userEvent.type(typeInput, "Electric", { delay: 100 });
    await userEvent.type(widthInput, "10", { delay: 100 });
    await userEvent.type(heightInput, "10", { delay: 100 });

    const submitButton = canvas.getByRole("button", { name: "Submit" });
    userEvent.click(submitButton);
  },
};
