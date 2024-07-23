import styles from "./Error.module.css";

interface IErrorProps {
  err: string | null;
}

export const Error: React.FC<IErrorProps> = (props) => {
  const { err } = props;
  return <div className={styles.container}>{err}</div>;
};
