import {
  IWeatherForecastData,
  WeatherForecastItem,
} from "../../types/interfaces";
import { filterForecastByTime } from "../../utils/forecastFilter";
import { ForecastCard } from "../forecastCard/ForecastCard";
import styles from "./WeatherForecast.module.css";

interface Props {
  forecast: IWeatherForecastData | null;
}

export const WeatherForecast: React.FC<Props> = (props) => {
  const { forecast } = props;

  if (!forecast) {
    return null;
  }
  const filteredForecastList = filterForecastByTime(forecast.list, "12:00:00");

  return (
    <div className={styles.container}>
      {filteredForecastList.map((item: WeatherForecastItem) => (
        <ForecastCard key={item.dt} data={item} />
      ))}
    </div>
  );
};
