import { WeatherForecastItem } from "../types/interfaces";

export const filterForecastByTime = (
  forecastList: WeatherForecastItem[],
  time: string
) => {
  return forecastList.filter((item) => {
    const itemTime = item.dt_txt.split(" ")[1];
    return itemTime === time;
  });
};
