import { useState } from 'react';

export default function WeatherForm({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        aria-label="City"
        placeholder="Enter city e.g. Lagos"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}
