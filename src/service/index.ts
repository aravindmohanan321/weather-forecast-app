import { PayloadData } from '../interface';
export const fetchWeatherDetails = async (isFromText = true, data: PayloadData) => {
  try {
    let queryParams = '';
    if (isFromText && data?.city) {
      queryParams = `q=${data?.city}`;
    } else {
      queryParams = `lat=${data?.lat}&lon=${data?.long}`;
    }
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${queryParams}&appid=b752520e8b80cf6f698e46f0882b8df9`,
    );
    const result = await response.json();
    return Promise.resolve(result);
  } catch (err) {
    Promise.reject('City Not Found !');
  }
};
