import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { getWeather } from '../redux/weatherSlice';

export const useWeather = (city: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const weather = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    if (city) {
      dispatch(getWeather(city));
    }
  }, [dispatch, city]);

  return weather;
};
