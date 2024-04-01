import React, { useState } from 'react';
import { PulseLoader } from 'react-spinners';
import './App.css';
import { fetchWeatherDetails } from './service';
import FormView from './components/FormView';
import WeatherView from './components/WeatherView';
import { PayloadData, WeatherData } from './interface';

function App(): React.ReactElement {
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeatherDetailsData = async (isCityEmpty: boolean, payload: PayloadData) => {
    const resultData = await fetchWeatherDetails(isCityEmpty, payload);
    if (resultData?.name && resultData?.main) {
      setWeatherData(resultData);
      setLoading(false);
      setErrorMessage('');
    } else {
      setLoading(false);
      setErrorMessage(resultData?.message);
    }
  };

  const getLocationInfoOfUser = () => {
    navigator.permissions
      .query({
        name: 'geolocation',
      })
      .then(function (result) {
        const onLocationFetchSuccess = (position: GeolocationPosition) => {
          const latitude = position?.coords?.latitude.toString();
          const longitude = position?.coords?.longitude.toString();
          fetchWeatherDetailsData(false, { lat: latitude, long: longitude });
        };

        const onLocationFetchFailure = (error?: GeolocationPositionError) => {
          setLoading(false);
          // Error code 1 corresponds to user denying/blocking the location permission
          if (error?.code === 1) {
            // Respond to failure case as required
            setErrorMessage(error?.message);
          }
        };

        navigator.geolocation.getCurrentPosition(onLocationFetchSuccess, onLocationFetchFailure);

        const failureOnFetch = () => {
          if (result.state === 'denied') {
            onLocationFetchFailure();
          }
        };

        failureOnFetch();

        // This will still work for Chrome
        result.onchange = function () {
          failureOnFetch();
        };
      });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (city === '') {
      //getting Current Location of user from navigator
      getLocationInfoOfUser();
    } else {
      //fetch weather data of entered Location in text-field
      fetchWeatherDetailsData(true, { city });
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
