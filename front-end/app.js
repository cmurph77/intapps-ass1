const api = "https//:localhost3001/weather/";
const app = Vue.createApp({
    data(){
        
        return {
            name: 'cian' ,
            age: 22,
            showResults: true,
            weatherData : {}
        }
    },

    methods: {
        changeTitle(title){
            console.log("change title pressed")
            this.name = title
        },

        getWeather(city){
            const apiURL = api + city;
            console.log("Calling API with City: " + city);
            console.log("CALLING THE URL: " + apiURL);

            fetch(apiURL)
                .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
                })
                .then((result) => {
                // Handle the API response here
                console.log(JSON.stringify(result, null, 3));
                // Update your component state or do something with the response data
                this.weatherData = result; // Assuming you have a data property named 'weatherData'
                })
                .catch((error) => {
                console.error('Error fetching data:', error);
                // Handle errors (e.g., display an error message to the user)
                this.errorMessage = 'Error fetching data. Please try again.'; // Assuming you have an error message data property
                });

        },

        toggleShowResults(){
            this.showResults = !this.showResults
            console.log("show results has been pressed")
        }
    }
});

app.mount('#app')
