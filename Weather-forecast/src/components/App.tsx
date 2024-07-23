import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { WeatherCard } from "./weatherCard/WeatherCard";
import { Search } from "./search/Search";
import { Loader } from "./loader/Loader";
import { Error } from "./error/Error";

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

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Search
          city={city}
          onCityChange={handleChange}
          onSearch={handleSearch}
          onKeyDown={handleKeyDown}
        />

        {weather.status === "loading" && (
          <div>
            <Loader />
          </div>
        )}
        {weather.status === "succeeded" && <WeatherCard data={weather.data} />}
        {weather.status === "failed" && (
          <div>
            <Error err={weather.error} />
          </div>
        )}
      </div>
    </div>
  );
};
