import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

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

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders the app title', () => {
    const titleElement = screen.getByText(/תחזית מסביב לעולם/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders weather data for each location', () => {
    weatherData.forEach(location => {
      const cityElement = screen.getByText(location.name);
      expect(cityElement).toBeInTheDocument();

      const descriptionElement = screen.getByText(location.description);
      expect(descriptionElement).toBeInTheDocument();

      const humidityElement = screen.getByText(`${location.humidity}%`);
      expect(humidityElement).toBeInTheDocument();

      const feelsLikeElement = screen.getByText(`${location.feels_like}°C`);
      expect(feelsLikeElement).toBeInTheDocument();

      const tempElement = screen.getByText(`${location.temp}°C`);
      expect(tempElement).toBeInTheDocument();
    });
  });
  it('displays the correct weather icons based on feels_like temperature', () => {
    const icons = ['🌤️', '🌤️', '☀️', '❄️']; 

    icons.forEach((icon) => {
      const iconElements = screen.getAllByText(icon);
      expect(iconElements.length).toBeGreaterThan(0); 
    });
  });

});