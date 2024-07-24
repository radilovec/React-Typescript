import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IWeatherData,
  IWeatherForecastData,
  IWeatherState,
} from "../types/interfaces";
import { fetchWeather, fetchWeatherForecast } from "../api/weatherApi";

const initialState: IWeatherState = {
  data: null,
  forecast: null,
  error: null,
  weatherStatus: "idle",
  forecastStatus: "idle",
};

export const getWeather = createAsyncThunk<
  IWeatherData,
  string,
  { rejectValue: string }
>("weather/getWeather", async (city: string, { rejectWithValue }) => {
  try {
    const response = await fetchWeather(city);
    return response as IWeatherData;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("Unknown error");
    }
  }
});

export const getWeatherForecast = createAsyncThunk<
  IWeatherForecastData,
  string,
  { rejectValue: string }
>("weather/getWeatherForecast", async (city: string, { rejectWithValue }) => {
  try {
    const response = await fetchWeatherForecast(city);
    return response as IWeatherForecastData;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("Unknown error");
    }
  }
});

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.weatherStatus = "loading";
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.weatherStatus = "succeeded";
        state.data = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.weatherStatus = "failed";
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = action.error.message || "Something went wrong :(";
        }
      })
      .addCase(getWeatherForecast.pending, (state) => {
        state.forecastStatus = "loading";
      })
      .addCase(getWeatherForecast.fulfilled, (state, action) => {
        state.forecastStatus = "succeeded";
        state.forecast = action.payload;
      })
      .addCase(getWeatherForecast.rejected, (state, action) => {
        state.forecastStatus = "failed";
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = action.error.message || "Something went wrong :(";
        }
      });
  },
});

export default weatherSlice.reducer;
