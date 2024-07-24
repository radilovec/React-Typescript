import { useEffect, useRef } from "react";
import styles from "./Search.module.css";
import { CiSearch } from "react-icons/ci";

interface ISearchProps {
  city: string;
  onCityChange: React.ChangeEventHandler<HTMLInputElement>;
  onSearch: () => void;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}

export const Search: React.FC<ISearchProps> = (props) => {
  const { city, onCityChange, onSearch, onKeyDown } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          type="text"
          value={city}
          onChange={onCityChange}
          onKeyDown={onKeyDown}
          ref={inputRef}
        />
        <CiSearch onClick={onSearch} className={styles.searchIcon} />
      </div>
    </div>
  );
};
