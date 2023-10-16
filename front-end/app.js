const api = "https//:localhost3001/";
const app = Vue.createApp({
    data(){
        
        return {
            name: 'cian' ,
            age: 22,
            showResults: true
        }
    },

    methods: {
        changeTitle(title){
            console.log("change title pressed")
            this.name = title
        },
        getWeather(city){
            console.log("Calling API with city" + city)
        },
        toggleShowResults(){
            this.showResults = !this.showResults
            console.log("show results has been pressed")
        }
    }
});

app.mount('#app')
