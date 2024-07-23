import { IWeatherData } from "../../types/interfaces";
import styles from "./WeatherCard.module.css";
import { PiWindThin } from "react-icons/pi";
import { FaTemperatureHigh, FaCity } from "react-icons/fa";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { msToTime } from "../../utils/dateFormate";

interface IWeatherCardProps {
  data: IWeatherData | null;
}

export const WeatherCard: React.FC<IWeatherCardProps> = (props) => {
  const { data } = props;

  if (!data) {
    return null;
  }

  const weatherDesc = data.weather[0];
  const sunrise = msToTime(data.sys.sunrise, data.timezone);
  const sunset = msToTime(data.sys.sunset, data.timezone);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>
          <FaCity />
          {data.name}
          <span className={styles.country}>({data.sys.country})</span>
        </h2>

        <div className={styles.weather}>
          <div className={styles.main}>
            <img
              src={`http://openweathermap.org/img/wn/${weatherDesc.icon}.png`}
            />
            <p> {weatherDesc.main}</p>
          </div>
          <span> {weatherDesc.description}</span>
        </div>

        <div className={styles.temperature}>
          <p>
            <FaTemperatureHigh />
            <span>
              {data.main.temp}
              <TbTemperatureCelsius />
            </span>
          </p>
          <span className={styles.feelsLike}>
            Feels like: {data.main.feels_like}
            <TbTemperatureCelsius />
          </span>
        </div>

        <div className={styles.wind}>
          <PiWindThin className={styles.icon} />
          {data.wind.speed} m/s
        </div>

        <div className={styles.sun}>
          <p>
            <FiSunrise />

            {sunrise}
          </p>
          <p>
            <FiSunset />

            {sunset}
          </p>
        </div>
      </div>
    </div>
  );
};
