
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

app.get('/weather/:input', (req, res) => {
  const input = req.params.input;
  console.log("\n Recieved weather forecast request for City: ")
  console.log(input);
  sample_data.city = input
  res.send(sample_data)
});

app.get('/test/echo/:input', (req, res) => {
  const input = req.params.input;
  sample_data.city = input
  res.send(sample_data)
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
