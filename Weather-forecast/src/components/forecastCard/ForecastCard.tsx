import { WeatherForecastItem } from "../../types/interfaces";
import styles from "./ForecastCard.module.css";
import { TbTemperatureCelsius } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";

interface Props {
  data: WeatherForecastItem | null;
}

export const ForecastCard: React.FC<Props> = (props) => {
  const { data } = props;

  if (!data) {
    return null;
  }

  const weatherDesk = data.weather[0];
  const date = data.dt_txt.split(" ")[0].split("-").slice(1).join(".");
  const temperature = Math.round(data.main.temp);

  return (
    <div className={styles.card}>
      <div className={styles.temperature}>
        <span>{temperature}</span>
        <TbTemperatureCelsius />
      </div>
      <p>{weatherDesk.main}</p>
      <p>
        <img src={`http://openweathermap.org/img/wn/${weatherDesk.icon}.png`} />
      </p>
      <div className={styles.date}>
        <CiCalendar />
        <span>{date} </span>
      </div>
    </div>
  );
};
