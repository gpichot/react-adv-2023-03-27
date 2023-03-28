import styles from "./InputControl.module.scss";

type InputControlProps = {
  label: string;
  name: string;
} & React.ComponentPropsWithoutRef<"input">;

export default function InputControl(props: InputControlProps) {
  const { label, name, id, ...inputProps } = props;
  const finalId = id || name;
  return (
    <div className={styles.inputControl}>
      <label className={styles.label} htmlFor={finalId}>
        {label}
      </label>
      <input
        className={styles.input}
        name={name}
        id={finalId}
        {...inputProps}
      />
    </div>
  );
}
