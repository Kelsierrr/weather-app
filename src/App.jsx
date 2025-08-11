import { useState } from 'react';
import './styles.css';
import WeatherForm from './components/WeatherForm.jsx';
import WeatherDisplay from './components/WeatherDisplay.jsx';
import { fetchWeather } from './api.js';

export default function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSearch(city) {
    setError('');
    setWeather(null);
    if (!city) return setError('City is required.');
    setLoading(true);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (e) {
      setError(e.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>Weather Checker</h1>
      <WeatherForm onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      <WeatherDisplay data={weather} />
      <footer>
        <small>Data by OpenWeather</small>
      </footer>
    </div>
  );
}
