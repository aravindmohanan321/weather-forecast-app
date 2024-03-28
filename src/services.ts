export const fetchWeatherDetails = async (city: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b752520e8b80cf6f698e46f0882b8df9`,
    );
    const result = await response.json();
    return Promise.resolve(result);
  } catch (err) {
    Promise.reject('City Not Found !');
  }
};
