import styles from "./Button.module.css";

interface IButtonProps {
  value: string;
  type: "operator" | "number" | "equal" | "clear";
  onClick: (value: string) => void;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { value, onClick, type } = props;
  const handleClick = () => {
    onClick(value);
  };

  const getButtonClass = () => {
    let buttonClass = styles.btn;
    if (type === "operator") buttonClass += ` ${styles.operator}`;
    if (type === "number") buttonClass += ` ${styles.number}`;
    if (type === "equal") buttonClass += ` ${styles.equal}`;
    if (type === "clear") buttonClass += ` ${styles.clear}`;
    return buttonClass;
  };

  return (
    <button onClick={handleClick} className={getButtonClass()}>
      {value}
    </button>
  );
};
