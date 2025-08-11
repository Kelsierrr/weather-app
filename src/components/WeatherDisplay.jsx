export default function WeatherDisplay({ data }) {
    if (!data) return null;
  
    return (
      <div className="card">
        <h2>
          {data.name}, {data.sys?.country}
        </h2>
        <p>Temp: <strong>{Math.round(data.main?.temp)}°C</strong></p>
        <p>Feels like: {Math.round(data.main?.feels_like)}°C</p>
        <p>Weather: {data.weather?.[0]?.description}</p>
        <p>Humidity: {data.main?.humidity}%</p>
        <p>Wind: {Math.round(data.wind?.speed)} m/s</p>
      </div>
    );
  }
  