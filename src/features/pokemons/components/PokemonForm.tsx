import React from "react";

import { Button, InputControl } from "@/components";

import styles from "./PokemonForm.module.scss";

interface PokemonFormProps {
  onSubmit?: (pokemon: {
    name: string;
    type: string;
    width: string;
    height: string;
  }) => void;
}

export default function PokemonForm({ onSubmit }: PokemonFormProps) {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [width, setWidth] = React.useState("");
  const [height, setHeight] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, type, width, height });

    onSubmit?.({ name, type, width, height });
  };

  const isValid = Boolean(name && type);

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        required
        label="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputControl
        label="Type"
        name="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <InputControl
        label="Width"
        name="width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <InputControl
        label="Height"
        name="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <Button type="submit" disabled={!isValid} className={styles.buttonSubmit}>
        Submit
      </Button>
    </form>
  );
}
