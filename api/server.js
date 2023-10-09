
const { json } = require('body-parser');
const express = require('express');
const app = express();

const port = 3001;

const sample_request = {
  city: 'New York'
}

const sample_data = {
  "city": "Dublin",
  "long": 1000,
  "lat": 1000,
  "day_one" : {
      "unix_dt": 10000000000,
      "temp": 23.4 ,
      "rainfall-level": 12,
      "windspeed": 20 ,
      "weather-type": "HOT",
      "wear-mask" : true
  },
  "day_two" :{
      "unix_dt": 10000000000,
      "temp": 23.4 ,
      "rainfall-level": 12,
      "windspeed": 20 ,
      "weather-type": "HOT",
      "wear-mask" : true
  },
  "day_three": {
      "unix_dt": 10000000000,
      "temp": 23.4 ,
      "rainfall-level": 12,
      "windspeed": 20 ,
      "weather-type": "HOT",
      "wear-mask" : true
  },
  "day_four":{
      "unix_dt": 10000000000,
      "temp": 23.4 ,
      "rainfall-level": 12,
      "windspeed": 20 ,
      "weather-type": "HOT",
      "wear-mask" : true
  },
  "day_five": {
      "unix_dt": 10000000000,
      "temp": 23.4 ,
      "rainfall-level": 12,
      "windspeed": 20 ,
      "weather-type": "HOT",
      "wear-mask" : true
  }
}


app.get('/helloworld', (req, res) => {
  res.send(sample_data);
  console.log(JSON.stringify(req, null,3));
  console.log("responce sent!")
});


app.post('/get-weather-data', (city, res) => {
  try {
    const sample_request = req.body;  // Assuming the request body contains the sample_request
    console.log(city);
    console.log("POST request revieved. Request Body can be viewed below \n")
    console.log(json.stringify(req.body, null, 4));
    // Process the request and generate sample_data object based on sample_request
    // This is just a placeholder - replace with your processing logic
    // You might want to use the sample_request data to customize the sample_data
    // Here, we're just sending back the predefined sample_data
    const processedSampleData = sample_data;

    // Return the sample_data as the API response
    res.json(processedSampleData);
  } catch (error) {
    res.status(500).json({ error: 'Sorry, An error occurred' });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
