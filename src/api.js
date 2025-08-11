const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

export async function fetchWeather(city) {
  if (!city) throw new Error('Please enter a city.');
  if (!API_KEY) throw new Error('Missing API key. Set VITE_OPENWEATHER_KEY in your environment.');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&units=metric&appid=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    // OpenWeather often returns { message: "city not found" }
    throw new Error(data?.message ? data.message : 'Failed to fetch weather');
  }
  return data;
}
