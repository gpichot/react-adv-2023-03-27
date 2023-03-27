import React from "react";
import classnames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<"button">, "onClick"> {
  variant?: "primary" | "secondary";
  onClick?: (value: string) => void;
}

export default function Button({
  variant = "primary",
  className,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      className={classnames(
        {
          [styles.buttonPrimary]: variant === "primary",
          [styles.buttonSecondary]: variant === "secondary",
        },
        className
      )}
      {...buttonProps}
      onClick={() => buttonProps.onClick?.("Hello")}
    />
  );
}
