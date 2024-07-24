interface IWind {
  speed: number;
  deg: number;
}

interface IWeatherMain {
  feels_like: number;
  temp: number;
  temp_min: number;
  temp_max: number;
}

interface IWeatherDescription {
  description: string;
  icon: string;
  main: string;
  id: number;
}

interface ISys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWeatherData {
  name: string;
  wind: IWind;
  weather: IWeatherDescription[];
  main: IWeatherMain;
  sys: ISys;
  timezone: number;
}

export interface IWeatherState {
  data: IWeatherData | null;
  forecast: IWeatherForecastData | null;
  error: string | null;
  weatherStatus: "idle" | "loading" | "succeeded" | "failed";
  forecastStatus: "idle" | "loading" | "succeeded" | "failed";
}

interface WeatherForecastMain {
  temp: number;
  temp_max: number;
  temp_min: number;
  feels_like: number;
  pressure: number;
}

interface WeatherForecastDescription {
  main: string;
  description: string;
  icon: string;
}

interface WeatherForecastWind {
  speed: number;
}

export interface WeatherForecastItem {
  main: WeatherForecastMain;
  weather: WeatherForecastDescription[];
  wind: WeatherForecastWind;
  dt_txt: string;
  dt: number;
}

export interface IWeatherForecastData {
  list: WeatherForecastItem[];
}
