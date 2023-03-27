import styles from "./InputControl.module.scss";

type InputControlProps = {
  label: string;
  name: string;
} & React.ComponentPropsWithoutRef<"input">;

export default function InputControl(props: InputControlProps) {
  const { label, name, ...inputProps } = props;
  return (
    <div className={styles.inputControl}>
      <label className={styles.label} htmlFor={inputProps.id || name}>
        {label}
      </label>
      <input className={styles.input} name={name} id={name} {...inputProps} />
    </div>
  );
}
