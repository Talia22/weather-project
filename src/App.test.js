import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve([
                {
                    cod: 200,
                    name: 'ניו יורק',
                    main: { temp: 28, feels_like: 26, humidity: 60 },
                    weather: [{ description: 'אובך' }],
                },
            ]),
        })
    );
});

afterEach(() => {
    jest.clearAllMocks();
});

test('renders WeatherInfo component', async () => {
    render(<App />);
    
    await waitFor(() => {
        const weatherInfoElement = screen.getByText(/תחזית מסביב לעולם/i);
        expect(weatherInfoElement).toBeInTheDocument();
    });
});
