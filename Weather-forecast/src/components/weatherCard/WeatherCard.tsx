import { IWeatherData } from "../../types/interfaces";

interface IWeatherCardProps {
  data: IWeatherData | null;
}

export const WeatherCard: React.FC<IWeatherCardProps> = (props) => {
  const { data } = props;
  return (
    <div>
      <p>City: {data?.name}</p>
      <p>Wind: {data?.wind.speed} m/s</p>
      <p>Temperature: {data?.main.temp}</p>
    </div>
  );
};
