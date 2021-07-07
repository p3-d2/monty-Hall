import styles from "../styles/NumberInput.module.css";

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
}

export function NumberInput({
  label,
  value,
  onChange,
  min = 1,
  max = 10,
}: NumberInputProps) {
  const decrement = () => value > min && onChange(--value);
  const increment = () => value < max && onChange(++value);

  return (
    <div className={styles.numberInput}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
      <div className={styles.buttons}>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
