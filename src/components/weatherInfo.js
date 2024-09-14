import React, { useEffect, useState } from 'react';
import WeatherCard from './weatherCard';
import API_TOKEN from '../config'

const WeatherInfo = () => {
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState([]);
    const apiKey = API_TOKEN
    const cities = ['New York', 'London', 'Eilat', 'Alaska'];

  
    useEffect(() => {
        const fetchWeatherData = async () => {
            setLoading(true);
            try {
                const responses = await Promise.all(
                    cities.map(city =>
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=he`)
                    )
                );
                const data = await Promise.all(responses.map(res => res.json()));
                const validData = data.filter(location => location.cod === 200);
                setWeatherData(validData);
            } 
            catch (error) {
                console.error('Error fetching weather data:', error);
            } 
            finally {
                setLoading(false);
            }
        };
        fetchWeatherData();
    },[apiKey]);

    
    return (    
    <>
        {loading && <div className="loading">Loading...</div>}
        { !loading &&(
            <div className="weather">
                <h1 className="title">תחזית מסביב לעולם</h1>
                <div className="weather-grid">
                {weatherData.map((location, index) => (
                    <div key={location.name}>
                    <WeatherCard key={index} location={location} />
                    </div>
                ))}
                </div>
            </div>
        )}

    </>
    )
    
};


export default WeatherInfo;
