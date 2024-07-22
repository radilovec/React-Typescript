import { useEffect, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { WeatherCard } from "./weatherCard/WeatherCard";

export const App: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [searchCity, setSearchCity] = useState<string>("");

  const weather = useWeather(searchCity);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    setSearchCity(city);
  };

  useEffect(() => {
    if (weather.status === "succeeded") {
      console.log(weather.data);
    }
  }, [weather.status, weather.data]);

  return (
    <div>
      <input type="text" value={city} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>

      {weather.status === "loading" && <p>Loading...</p>}
      {weather.status === "succeeded" && <WeatherCard data={weather.data} />}
      {weather.status === "failed" && <p>{weather.error}</p>}
    </div>
  );
};
