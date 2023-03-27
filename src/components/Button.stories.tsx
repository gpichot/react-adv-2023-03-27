import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Inputs/Button",
  component: Button,
  argTypes: {
    onClick: { action: "click" },
  },
  args: {
    children: "Foo2",
  },
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Secondary: Story = {
  args: {
    children: "Hello",
    variant: "secondary",
  },
  parameters: {
    docs: {
      description: {
        story: "Hello",
      },
    },
  },
};
export default meta;
