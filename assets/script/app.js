// set up variables 
var buttonEl = document.getElementById("city")
var inputEl = document.querySelector("#city-input")
var nameEl = document.querySelector(".name")
var descriptionEl = document.querySelector(".description")
var temperatureßEl = document.querySelector(".temperature")


// // get the api url 
// fetch("https://api.openweathermap.org/data/2.5/weather?q='+inputEl.value+'&appid=b9aaab899e7b92e567e4c198d0328fbe")
// .then(function(response){
//     response.json()
// })
// .then(function(data){
//     console.log(data)
// }).catch(function(error){
//     alert("wrong city Name!")
// })

buttonEl.addEventListener("click", function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputEl.value}&appid=b9aaab899e7b92e567e4c198d0328fbe`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
}).catch(function(error){
    alert("wrong city Name!")
})

} )