import React from 'react';
import './App.css';
import WeatherCard from './weatherCard';

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


function App() {
  return (
    <div className="weather">
      <h1 className="app-title">תחזית מסביב לעולם</h1>
      <div className="weather-grid">
        {weatherData.map((location, index) => (
          <WeatherCard key={index} location={location} />
        ))}
      </div>
    </div>
  );
}



export default App;
