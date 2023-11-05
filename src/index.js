//current date
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sartudary",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "Decmber",
];
let month = months[now.getMonth()];

let date = now.getDate();
let year = now.getFullYear();
let hour = now.getHours();
let minute = now.getMinutes();

let currentDate = document.querySelector(".date");
currentDate.innerHTML =
  day + ", " + date + " " + month + " " + year + "| " + hour + ":" + minute;

//the search engine
function displayWeatherCondtion(response) {
  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector("#degrees").innerHTML = Math.round(
    response.data.temparature
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.main.wind
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47eebf3ab71e19dbe4c72769a83a4499&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondtion);
}

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", search);

search("Johannesburg");
