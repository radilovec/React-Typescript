import styles from "./Output.module.css";

interface IOutputProps {
  expression: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Output: React.FC<IOutputProps> = (props) => {
  const { expression, onChange } = props;

  return (
    <div>
      <input
        type="text"
        value={expression}
        className={styles.output}
        onChange={onChange}
      />
    </div>
  );
};
