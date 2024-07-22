import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IWeatherData, IWeatherState } from "../types/interfaces";
import { fetchWeather } from "../api/weatherApi";

const initialState: IWeatherState = {
    data: null,
    error: null,
    status: "idle"
}

export const getWeather = createAsyncThunk<IWeatherData, string, object>(
    'weather/getWeather',
    async(city: string) => {
        const response = await fetchWeather(city)
        return response as IWeatherData
    }
)


const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.status = "loading"
            })
            .addCase(getWeather.fulfilled, (state, action) =>{
                state.status = "succeeded"
                state.data = action.payload
            })
            .addCase(getWeather.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message || "Something went wrong :("
            })
    },
})




export default weatherSlice.reducer