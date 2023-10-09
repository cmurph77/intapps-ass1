// required data for the api to return
// 1 -- 5 day weather forcast - display as table with temp, windspeed and rainfall
// 2 -- packing if(rain){  bringUmbrella = true}
// 3 -- type of clothes - cold[<13], mild [13 - 23], hot[>23]

const apiKey = '9d54b4134840423050e9a3f21b40dc15'; // Replace with your OpenWeatherMap API key


async function getWeatherForecast(city) {
    const count = 5;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=${count}&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const forcastData = await response.json();
      console.log(JSON.stringify(forcastData,null ,5));

    } 
    catch (error) {
      console.error('Error fetching weather forecast data:', error);
    }
  }
  
  // Call the function to get the 5-day weather forecast
  getWeatherForecast('New York');

// async function getCurrentWeather() {

//   try {
//     const response = await fetch(apiUrl);
//     //));
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const weatherData = await response.json();

//     console.log(JSON.stringify(weatherData,null ,3));
//     const description = weatherData.weather[0].description;
//     const temperature = weatherData.main.temp;

//     console.log('Weather in New York City:', description);
//     console.log('Temperature:', temperature, '°C');
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//   }
// }