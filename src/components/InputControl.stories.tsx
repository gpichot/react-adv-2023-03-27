import type { Meta, StoryObj } from "@storybook/react";

import InputControl from "./InputControl";

const meta: Meta<typeof InputControl> = {
  title: "Inputs/InputControl",
  component: InputControl,
};

export default meta;

type Story = StoryObj<typeof InputControl>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    name: "name",
  },
};
