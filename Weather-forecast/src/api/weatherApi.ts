import axios from "axios";
import { IWeatherData } from "../types/interfaces";
const API_KEY = "e6ee9b9a03a389487159b6d869b448d3";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeather = async (city: string): Promise<IWeatherData> => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data as IWeatherData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(error.message);
      }
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
