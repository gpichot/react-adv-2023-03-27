import React from "react";

import styles from "./InputControl.module.scss";

type InputControlProps = {
  label: string;
  name: string;
} & React.ComponentProps<"input">;

function InputControl(
  props: InputControlProps,
  ref: React.Ref<HTMLInputElement>
) {
  const { label, name, id, ...inputProps } = props;
  const finalId = id || name;
  return (
    <div className={styles.inputControl}>
      <label className={styles.label} htmlFor={finalId}>
        {label}
      </label>
      <input
        ref={ref}
        className={styles.input}
        name={name}
        id={finalId}
        {...inputProps}
      />
    </div>
  );
}

export default React.forwardRef(InputControl);
