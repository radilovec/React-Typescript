interface IWind {
    speed: number,
    deg: number
}

interface IWeatherMain {
    feels_like: number,
    temp: number,
    temp_min: number,
    temp_max: number,
}

interface IWeatherDescription {
    description: string,
    icon: string,
    main: string,
    id: number,
}

interface ISys {
    country: string,
    sunrise: number,
    sunset: number,
}

export interface IWeatherData{
    name: string,
    wind: IWind,
    weather: IWeatherDescription[],
    main: IWeatherMain,
    sys: ISys
}

export interface IWeatherState {
    data: IWeatherData | null,
    error: string | null,
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

