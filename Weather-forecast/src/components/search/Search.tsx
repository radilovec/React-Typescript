import styles from "./Search.module.css";
import { CiSearch } from "react-icons/ci";

interface ISearchProps {
  city: string;
  onCityChange: React.ChangeEventHandler<HTMLInputElement>;
  onSearch: () => void;
}

export const Search: React.FC<ISearchProps> = (props) => {
  const { city, onCityChange, onSearch } = props;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input type="text" value={city} onChange={onCityChange} />
        <CiSearch onClick={onSearch} className={styles.searchIcon} />
      </div>
    </div>
  );
};
