const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timezone = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const API_KEY = "e2ebed421da766bb25b2552e6bc0112e";

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";

  timeEl.innerHTML =
    (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    " " +
    `<span id="am-pm">${ampm}</span>`;

  dateEl.innerHTML = days[day] + ", " + date + ` ` + months[month];
}, 1000);

function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Current Weather:", data);
        showWeatherData(data);

        return fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );
      })
      .then((res) => res.json())
      .then((forecastData) => {
        console.log("Forecast Data:", forecastData);
        showForecastData(forecastData);
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Terjadi kesalahan saat mengambil data cuaca.");
      });
  });
}

function showWeatherData(data) {
  const { main, wind, sys, name, coord } = data;

  timezone.innerText = Intl.DateTimeFormat().resolvedOptions().timeZone;
  countryEl.innerText = `${name}, ${sys.country} | Lat: ${coord.lat}, Lon: ${coord.lon}`;

  currentWeatherItemsEl.innerHTML = `
    <div class="weather-item">
        <div>Humidity</div>
        <div>${main.humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${main.pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind.speed} m/s</div>
    </div>
    <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sys.sunrise * 1000).format("HH:mm a")}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sys.sunset * 1000).format("HH:mm a")}</div>
    </div>
  `;
}

function showForecastData(data) {
  let dailyData = [];
  const usedDates = new Set();

  data.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!usedDates.has(date) && dailyData.length < 5) {
      usedDates.add(date);
      dailyData.push(item);
    }
  });

  let forecastHTML = "";
  dailyData.forEach((day) => {
    forecastHTML += `
      <div class="weather-forecast-item">
        <div class="day">${window.moment(day.dt * 1000).format("ddd")}</div>
        <img src="https://openweathermap.org/img/wn/${
          day.weather[0].icon
        }@2x.png" alt="weather icon" class="w-icon">
        <div class="temp">Temp - ${day.main.temp}&#176; C</div>
        <div class="temp">${day.weather[0].description}</div>
      </div>
    `;
  });

  weatherForecastEl.innerHTML = forecastHTML;
}
getWeatherData();

function setBackgroundBasedOnTime() {
  const hour = new Date().getHours();

  let backgroundImage = "";

  if (hour >= 5 && hour < 11) {
    backgroundImage = "./img/morning.jpg";
  } else if (hour >= 11 && hour < 16) {
    backgroundImage = "./img/day.jpg";
  } else if (hour >= 16 && hour < 19) {
    backgroundImage = "./img/sunset.jpg";
  } else {
    backgroundImage = "./img/night.jpg";
  }
  document.body.style.backgroundImage = `url('${backgroundImage}')`;
}

setBackgroundBasedOnTime();

setInterval(setBackgroundBasedOnTime, 60000);

function setThemeBasedOnTime() {
  const hour = new Date().getHours();
  const body = document.body;

  body.classList.remove("morning", "day", "sunset", "night");

  if (hour >= 5 && hour < 11) {
    body.classList.add("morning");
    document.documentElement.style.setProperty("--text-color", "#333");
  } else if (hour >= 11 && hour < 16) {
    body.classList.add("day");
    document.documentElement.style.setProperty("--text-color", "#333");
  } else if (hour >= 16 && hour < 19) {
    body.classList.add("sunset");
    document.documentElement.style.setProperty("--text-color", "#fff");
  } else {
    body.classList.add("night");
    document.documentElement.style.setProperty("--text-color", "#fff");
  }
}

setThemeBasedOnTime();

setInterval(setThemeBasedOnTime, 60000);
