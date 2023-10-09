// const express = require('express');
// const app = express()

// const port = 3001

// // adding in my personal open-weather api key
// const owp_api = {
//     key: '9d54b4134840423050e9a3f21b40dc15',
//     base: 'https://api.openweathermap.org/data/2.5/'
  
//   }

// app.get('/helloworld', (req, res) => {

//   res.send('Hello World!')
// })
// const[search,setSearch] = useState("");

// app.get('/city-request', (req, res) => {

//      res.send(getWeather(req))
//   })

// function getWeather(name) {
//     fetch(`${owp_api.base}weather?q=${search}&units=metric&APPID=${owp_api.key}`)
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//       });
//       return result;
// } 
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

///////// gpt ---
const express = require('express');
//const fetch = require('node-fetch');
const app = express();

const port = 3001;

const owp_api = {
  key: '9d54b4134840423050e9a3f21b40dc15',
  base: 'https://api.openweathermap.org/data/2.5/'
};

app.get('/helloworld', (req, res) => {
  res.send('Hello World!');
  console.log("responce sent!")
});

app.get('/city-request', (req, res) => {
  const search = req.query.search; // Retrieve search parameter from the request query
  getWeather(search)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

async function getWeather(search) {
    console.log("getting weather")
  try {
    const response = await fetch(`${owp_api.base}weather?q=${search}&units=metric&APPID=${owp_api.key}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
