
const apiKey = '9d54b4134840423050e9a3f21b40dc15'; // Replace with your OpenWeatherMap API key

// this function takes a city as a parameter and makes call to api to get weather forcast for that city
async function getWeatherForecastDaily(city) {
    const count = 2;
    const coords = await getCityLatLon(city)
    console.log(JSON.stringify(coords, null, 3));

    const lat = coords.lat;
    const lon = coords.lon;
    // lat = 53.00
    // long = 46
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${apiKey}`;
    let forecastData;

    try {
      const response = await fetch(apiUrl);
      console.log('Response Status:', response.status); // Log the response status

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
    forecastData = await response.json();
    } 
    catch (error) {
      console.error('Error fetching weather forecast data:', error);
    }
    const cleaned_data = createForcastObj(forecastData);
    cleaned_data.city = city;
    return cleaned_data;

}

function getCityLatLon(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`)
    .then((res) => res.json())
    .then((result) => {
        //console.log(JSON.stringify(result, null, 3));
      const coords = {
        lat: result.coord.lat,
        lon: result.coord.lon,
        country: result.sys.country
      };
      return coords;
    });
}

// cleand up the forecast data
function createForcastObj(raw_data){
  const forecast = {
    "city": "blank",
    "lat": raw_data.lat,
    "lon": raw_data.lon,
  };

  for (let i = 1; i <= 6; i++) {
    forecast[`day_${i}`] = {
        "unix_dt": raw_data.daily[i - 1].dt,
        //"temp": raw_data.daily[i - 1].main.temp,
       // "windspeed": raw_data.daily[i - 1].wind.speed,
        //"weather-type": raw_data.daily[i - 1].weather.main,
        //"weather-description": raw_data.daily[i - 1].weather.description,
       // "rain": raw_data.daily[i - 1].rain
    };
  }

  return forecast;

}

module.exports = { getWeatherForecastDaily }
