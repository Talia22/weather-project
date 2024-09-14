const WeatherCard = ({ location }) => {
   
    const getWeatherIcon = (temp) => {
        if (temp <= 20) return '❄️'; 
        if (temp > 20 && temp < 30) return '🌤️'; 
        return '☀️'; 
      };

    return (
    <div className="weather-card">
        <div className="weather-header">
            <span className="weather-icon">{getWeatherIcon(location.main?.feels_like)}</span>
            <div className="weather-info">
                <h1 className="city-name">{location.name}</h1>
                <h3 className="weather-description">{location.weather[0]?.description}</h3>
            </div>
            </div>
            <div className="weather-details">
                <div>
                    <span>לחות</span>
                    <strong>{location.main?.humidity}%</strong>
                </div>
                <div>
                    <span>טמפ' מורגשת</span>
                    <strong>{Math.round(location.main?.feels_like)}°C</strong>
                </div>
                <div>
                    <span>טמפ' נמדדת</span>
                    <strong>{Math.round(location.main?.temp)}°C</strong>
                </div>
            </div>
        </div>
    )
  
  };
  
  export default WeatherCard;