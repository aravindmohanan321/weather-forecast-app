import React, { useState } from 'react';
import { PulseLoader } from 'react-spinners';
import './App.css';
import { fetchWeatherDetails } from './services';
import FormView from './components/FormView';
import WeatherView from './components/WeatherView';
import { WeatherData } from './interfaces';

function App(): React.ReactElement {
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (city === '') {
      setErrorMessage(`Please Enter a Valid Input !`);
    } else {
      setLoading(true);
      const resultData = await fetchWeatherDetails(city);
      if (resultData?.name && resultData?.main) {
        setWeatherData(resultData);
        setLoading(false);
      } else {
        setLoading(false);
        setErrorMessage(resultData?.message);
      }
    }
  };

  const renderView = () =>
    weatherData === null ? (
      <FormView
        city={city}
        message={errorMessage}
        setCity={setCity}
        setErrorMessage={setErrorMessage}
        handleFormSubmit={handleFormSubmit}
      />
    ) : (
      <WeatherView weatherData={weatherData} setWeatherData={setWeatherData} setCity={setCity} />
    );

  return (
    <div className="container d-flex justify-center items-center">
      {loading ? <PulseLoader color="#2769ae" /> : renderView()}
    </div>
  );
}

export default App;
