import styles from "./select.module.css";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption | undefined;
  onChange: (value: SelectOption | undefined) => void;
};

export function Select({ options, value, onChange }: SelectProps) {
  return <div className={styles.container}>Hi</div>;
}
