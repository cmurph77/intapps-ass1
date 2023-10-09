// required data for the api to return
// 1 -- 5 day weather forcast - display as table with temp, windspeed and rainfall
// 2 -- packing if(rain){  bringUmbrella = true}
// 3 -- type of clothes - cold[<13], mild [13 - 23], hot[>23]

const { raw } = require("body-parser");

const apiKey = '9d54b4134840423050e9a3f21b40dc15'; // Replace with your OpenWeatherMap API key

async function getWeatherForecast(city) {
    const count = 5;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=${count}&appid=${apiKey}`;
    let forecastData;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
    forecastData = await response.json();
    //console.log(JSON.stringify(forecastData,null ,5));
    } 
    catch (error) {
      console.error('Error fetching weather forecast data:', error);
    }

    return forecastData;

}

function createForcastObj(raw_data){
    const forecast = {
        "city": raw_data.city.name,
        "day_1" :{
            "unix_dt": raw_data.list[0].dt,
            "temp" : raw_data.list[0].main.temp,
            "windspeed" : raw_data.list[0].wind.speed,

        },
        "day_2" :{
            "unix_dt": raw_data.list[1].dt,
            "temp" : raw_data.list[1].main.temp

        }
    }
    return forecast;
}

function createForecastObject_Iterative(raw_data) {
    const forecast = {
      city: raw_data.city.name,
    };
  
    for (let i = 0; i < 5; i++) {
      const dayNumber = i + 1;
      const unix_dt = raw_data.list[i].dt;
      forecast[`day_${dayNumber}`] = { unix_dt };
    }
  
    return forecast;
  }

async function main(){
    // Call the function to get the 5-day weather forecast
    const returned_data = await getWeatherForecast('New York');
    console.log(JSON.stringify(returned_data, null, 4)); 
    const cleaned_data =  createForcastObj(returned_data);
    console.log(JSON.stringify(cleaned_data, null, 4)); 

}
main();