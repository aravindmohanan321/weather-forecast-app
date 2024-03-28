import React from 'react';

interface FormProps {
  city: string;
  message: string;
  setCity: (city: string) => void;
  setErrorMessage: (message: string) => void;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function FormView({ city, message, setCity, setErrorMessage, handleFormSubmit }: FormProps): React.ReactElement {
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
            setCity(e.target.value);
          }}
        />
        <div className="text-line-container">
          <h6>
            <span>Or</span>
          </h6>
        </div>
        <button type="submit">Get Device Location</button>
        <div id="fail">
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}
export default FormView;
