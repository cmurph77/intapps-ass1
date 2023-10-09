const apiKey = '9d54b4134840423050e9a3f21b40dc15'; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = 'New York';
  const country = 'US';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    //));
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const weatherData = await response.json();
    const description = weatherData.weather[0].description;
    const temperature = weatherData.main.temp;

    console.log('Weather in New York City:', description);
    console.log('Temperature:', temperature, '°C');
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Call the function to get weather details
getWeather();
