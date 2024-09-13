import React from 'react';
import './App.css';

const weatherData = [
  {
    name: 'ניו יורק',
    description: 'אובך',
    temp: 28,
    feels_like: 26,
    humidity: 60,
  },
  {
    name: 'לונדון',
    description: 'שברי ענן',
    temp: 30,
    feels_like: 29,
    humidity: 52,
  },
  {
    name: 'אילת',
    description: 'שמים בהירים',
    temp: 39,
    feels_like: 40,
    humidity: 18,
  },
  {
    name: 'אלסקה',
    description: 'מעונן',
    temp: 13,
    feels_like: 12,
    humidity: 90,
  },
];

const getWeatherIcon = (temp) => {
  if (temp <= 20) return '❄️'; 
  if (temp > 20 && temp < 30) return '🌤️'; 
  return '☀️'; 
};

function App() {
  return(
    <div className="weather">
      <h1 className="app-title">תחזית מסביב לעולם</h1>
      <div className="weather-grid">
      {weatherData.map((location, index) => (
          <div key={index} className="weather-card">
            <div className="weather-header">
              <span className="weather-icon">{getWeatherIcon(location.feels_like)}</span>
              <div>
                <h1 className="city-name">{location.name}</h1>
                <h3 className="weather-description">{location.description}</h3>
              </div>
            </div>
            <div className="weather-details">
              <div>
                <span>לחות</span>
                <strong>{location.humidity}%</strong>
              </div>
              <div>
                <span>טמפ' מורגשת</span>
                <strong>{location.feels_like}°C</strong>
              </div>
              <div>
                <span>טמפ' נמדדת</span>
                <strong>{location.temp}°C</strong>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>


  );
}

export default App;
