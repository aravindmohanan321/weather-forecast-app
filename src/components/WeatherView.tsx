import React from 'react';
import { WeatherData } from '../interface';
import Clear from '../assets/Clear.png';
import Clouds from '../assets/Clouds.png';
import Fog from '../assets/Fog.png';
import Haze from '../assets/Haze.png';
import Mist from '../assets/Mist.png';
import Rain from '../assets/Rain.png';
import Smoke from '../assets/Smoke.png';
import { HumidityIcon, LocationIcon, BackIcon, TemperatureIcon } from './Icons';

interface WeatherProps {
  weatherData: WeatherData | null;
  setWeatherData: (weatherData: WeatherData | null) => void;
  setCity: (city: string) => void;
}

function WeatherView({ weatherData, setWeatherData, setCity }: WeatherProps): React.ReactElement {
  const getTemperature = () => {
    //temperature
    let cels = '';
    if (weatherData) {
      const temp = weatherData?.main?.temp;
      const cel = eval((temp - 273.15).toString());
      cels = cel.toFixed(1);
    }
    return cels;
  };

  const getMaxTemperature = () => {
    //max temp
    let maxtemp = '';
    if (weatherData) {
      const max = weatherData?.main?.temp_max;
      const maxc = eval((max - 273.15).toString());
      maxtemp = maxc.toFixed(1);
    }
    return maxtemp;
  };

  const getMinTemperature = () => {
    //min temp
    let mintemp = '';
    if (weatherData) {
      const min = weatherData?.main?.temp_min;
      const minc = eval((min - 273.15).toString());
      mintemp = minc.toFixed(1);
    }
    return mintemp;
  };

  const getFeeling = () => {
    const wthr = weatherData && weatherData?.weather?.map((newd) => newd['main']);
    const feeling = wthr?.[0];
    switch (feeling) {
      case 'Clouds':
        return Clouds;
      case 'Fog':
        return Fog;
      case 'Haze':
        return Haze;
      case 'Mist':
        return Mist;
      case 'Rain':
        return Rain;
      case 'Smoke':
        return Smoke;
      default:
        return Clear;
    }
  };

  const getDescription = () => {
    //description
    const wthrs = weatherData?.weather.map((newd) => newd['description']);
    const feelings = wthrs?.[0];
    return feelings;
  };

  const renderTitlePortion = (): React.JSX.Element => (
    <div className="title-container">
      <div
        className="svg-container"
        onClick={() => {
          setCity('');
          setWeatherData(null);
        }}
      >
        <BackIcon height="20" />
      </div>
      <h3>Weather App</h3>
    </div>
  );

  const renderWeatherSection = () => (
    <div className="weather-section-container">
      <div className="image-container">
        <img src={getFeeling()} alt="Climate feels like" />
      </div>
      <h2 className="temperature">{getTemperature()}°C</h2>
      <div id="feel" className="feels">
        {getDescription()}
      </div>
      <div className="d-flex">
        <div className="location-icon">
          <LocationIcon height="20" />
        </div>
        {weatherData?.name}
      </div>
    </div>
  );

  const renderOtherTemperatureDetails = () => (
    <div className="temp-container">
      <div className="temp-section temp-section-bordr">
        <div className="d-flex items-center">
          <TemperatureIcon height="30" />
          <div className="temp-section-text">
            <strong>{getMinTemperature()}°C Min</strong>
            <strong>{getMaxTemperature()}°C Max</strong>
            <p>Feels like</p>
          </div>
        </div>
      </div>
      <div className="temp-section">
        <div className="d-flex items-center mt-3">
          <HumidityIcon height="30" />
          <div className="temp-section-text">
            <strong>{weatherData?.main?.humidity}%</strong>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="weather-container">
      {renderTitlePortion()}
      {renderWeatherSection()}
      {renderOtherTemperatureDetails()}
    </div>
  );
}
export default WeatherView;
