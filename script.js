
const apikey = "7206beaddf6d17fc3611f6beeb67c4d3";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

function fetchWeather(city) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiurl + city + `&appid=${apikey}`, true);

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
  fetchWeather(city)
    .then((data) => {
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "cloud.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "clear_img.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "rain_img.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "mist.png";
      }
    })
    .catch((error) => {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
      console.error(error);
    });
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});