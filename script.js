const apikey = "7206beaddf6d17fc3611f6beeb67c4d3";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
function fetchWeather(city) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${apiurl}${city}&appid=${apikey}`, true);  

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText)); 
      } else {
        reject("City not found!"); 
      }
    };
    xhr.onerror = function () {
      reject("Network error! Please try again."); 
    };
    xhr.send();
  });
}
function checkWeather(city) {
  if (!city) {
    document.querySelector(".error").innerHTML = "Please enter a city name!";
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
  }
  fetchWeather(city.trim())
    .then((data) => {
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

      const iconCode = data.weather[0].icon;
      weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}.png`; 

      console.log("Weather icon code:", iconCode);  
    })
    .catch((error) => {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
      document.querySelector(".error").innerHTML = error;
      console.error(error);
    });
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
