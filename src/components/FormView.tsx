import React, { useEffect, useState } from 'react';

interface FormProps {
  city: string;
  message: string;
  setCity: (city: string) => void;
  setErrorMessage: (message: string) => void;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function FormView({ city, message, setCity, setErrorMessage, handleFormSubmit }: FormProps): React.ReactElement {
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    // Update the button text when the city prop changes
    if (!city) {
      setButtonText('Get Device Location');
    } else {
      setButtonText('Get Weather');
    }
  }, [city]);

  return (
    <div className="form-container">
      <h3>Weather App</h3>
      <form className="weather-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Enter city name"
          value={city}
          maxLength={25}
          onChange={(e) => {
            setErrorMessage('');
            setCity(e.target.value.trim());
          }}
        />
        <div className="text-line-container">
          <h6>
            <span>Or</span>
          </h6>
        </div>
        <div className="mb-3"></div>
        <button type="submit">{buttonText}</button>
        <div id="fail">
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}
export default FormView;
