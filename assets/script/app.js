// set up variables 
var buttonEl = document.querySelector(".btn")
var inputEl = document.querySelector("#city-input")
var nameEl = document.querySelector(".name")
var descriptionEl = document.querySelector(".description")
var temperatureßEl = document.querySelector(".temperature")
var humidityEl = document.querySelector(".humidity")
var windEl = document.querySelector("wind")



buttonEl.addEventListener("click", function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputEl.value}&appid=b9aaab899e7b92e567e4c198d0328fbe&units=metric`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {

            //     var nameValue = data['name']
            //    var temp = data['main']['temp']
            //    var humidity = data['main']['humidity']
            //    var wind = data['wind']['speed']
            //    var descriptionValue = data['weather'][0]['description']

            //    nameEl.innerHTML = nameValue
            //    temperatureßEl.innerHTML = "temperature" + temp
            //    descriptionEl.innerHTML = descriptionValue
            //    humidityEl.innerHTML = humidity
            //    windEl.innerHTML = wind


            console.log(data)
            var lat = data.coord.lat
            var long = data.coord.lon
            var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly&appid=b9aaab899e7b92e567e4c198d0328fbe&units=imperial`
            //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
            fetch(url)
                .then(function (dataApi) {
                    return dataApi.json()
                }).then(function (apiResults) {
                    console.log(apiResults)
                })
            // }).catch(function(error){
            //     alert("wrong city Name!")
        })

})




