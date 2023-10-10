
const apiKey = '9d54b4134840423050e9a3f21b40dc15'; // Replace with your OpenWeatherMap API key

// this function takes a city as a parameter and makes call to api to get weather forcast for that city
async function getWeatherForecastDaily(city) {
    const count = 2;
    const long = 40.7128;
    const lat = 74.0060;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,hourly,minutely,alerts&units=metric&appid=${apiKey}`;
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
    return createForcastObj(forecastData);

}

// cleand up the forecast data
function createForcastObj(raw_data){
  const forecast = {
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


async function main(){
    const returned_data = await getWeatherForecastDaily('New York');
    console.log(JSON.stringify(returned_data, null, 4)); 

}

main();