let currentCity = {
  cityName: null,
  countryCode: null,
};
window.onload = () => {
  loadCurrentCity();
};

const apiKey = "0cc091074db97585918ab121fb7f94d9";
const $root = $("#root");
const $searchBtn = $(".search-btn");
const $searchInput = $(".form-control");

const $navToday = $(".today-forecast");
const $navFiveDay = $(".five-day-forecast");
$navToday.on("click", function (e) {
  e.preventDefault();
  $navToday.addClass("active");
  $navFiveDay.removeClass("active");

  $root.html("");
  loadCurrentCity();
});
$navFiveDay.on("click", function (e) {
  e.preventDefault();
  $navFiveDay.addClass("active");
  $navToday.removeClass("active");

  weather.displayFiveDays(null);

  const $days = $(".days");
  $days.children().on("click", function () {
    $(this).addClass("active-day").removeClass("bg-light");
    $(this).siblings().removeClass("active-day").addClass("bg-light");
  });
});


let defaultCity = {
  cityName: "Rivne",
  countryCode: "UA",
};

function saveCurrentCity() {
  localStorage.setItem("currentCity", JSON.stringify(currentCity));
  console.log("aaaaaaaa");
}
function loadCurrentCity() {
  const storedCity = JSON.parse(localStorage.getItem("currentCity"));

  if (storedCity) {
    currentCity.cityName = storedCity.cityName;
    currentCity.countryCode = storedCity.countryCode;
    weather.fetchDefaultCityWeather();
  } else {
    console.log("No stored city found.");
    weather.createCurrentWeatherSection();
    weather.createHourlyWeatherSection();
    weather.createNearbyPlacesSection();
  }
}

class ExtendedDate extends Date {
  getFormattedDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return dd + "." + mm + "." + yyyy;
  }

  convertTimestamp(timestamp) {
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  }

  calculateDayDuration(sunrise, sunset) {
    let duration = (sunset - sunrise) / 3600;
    let hours = Math.floor(duration);
    let minutes = Math.floor((duration - hours) * 60);

    return `${hours}:${minutes}`;
  }
}

function convertWindDirection(degree) {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.floor((degree + 11.25) / 22.5) % 16;
  return directions[index];
}
class MyWeather {
  async getCurrentWeather(lat, lon) {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(api);
    const data = await response.json();

    console.log(data);
    return data;
  }
  async createCurrentWeatherSection() {
    try {
      const permission = await navigator.permissions.query({
        name: "geolocation",
      });
      if (permission.state === "granted") {
        navigator.geolocation.getCurrentPosition(async (pos) => {
          const data = await this.getCurrentWeather(
            pos.coords.latitude,
            pos.coords.longitude
          );
          this.displayCurrentWeather(data);
        });
      } else {
        this.fetchDefaultCityWeather();
      }
    } catch (error) {
      console.error("Geolocation error:", error);
      this.fetchDefaultCityWeather();
    }
  }
  async fetchDefaultCityWeather() {
    try {
      let data = null;

      if (currentCity.cityName && currentCity.countryCode) {
        data = await this.getWeatherByPlaceName(
          currentCity.cityName,
          currentCity.countryCode
        );
      } else {
        data = await this.getWeatherByPlaceName(
          defaultCity.cityName,
          defaultCity.countryCode
        );
      }

      this.displayCurrentWeather(data);

      const hourlyData = await this.getHourlyWeather(
        data.coord.lat,
        data.coord.lon
      );
      this.displayHourlyWeather(hourlyData);

      const nearbyPlacesData = await this.getNearbyPlaces(
        data.coord.lat,
        data.coord.lon
      );
      this.displayNearbyPlaces(nearbyPlacesData);
    } catch (error) {
      console.error("Error fetching default city weather:", error);
    }
  }
  displayCurrentWeather(data) {
    if (data && data.sys) {
      currentCity.cityName = data.name;
      currentCity.countryCode = data.sys.country;
      $searchInput.val(`${currentCity.cityName}, ${currentCity.countryCode}`);

      saveCurrentCity();
      console.log($searchInput);
      console.log(currentCity);
    } else {
      console.error("Invalid data:", data);
    }

    let todayDate = new ExtendedDate();
    let content = `<div class="container">
                      <div class="current-weather d-flex flex-column my-4 pb-4 bg-light">
                      <div class="current-weather-text d-flex justify-content-between mb-3">
                          <h3 class="text-uppercase m-3">current weather</h3>
                          <h3 class="current-date m-3">${todayDate.getFormattedDate()}</h3>
                      </div>
                      <div class="current-weather-data d-flex justify-content-around align-items-center">
                          <div class="current-weather-icon d-flex flex-column align-items-center">
                          <img src="https://github.com/yuvraaaj/openweathermap-api-icons/blob/master/icons/${
                            data.weather[0].icon
                          }.png?raw=true" draggable="false" alt="weather-icon" style="width: 64px; height: 64px"/>
                          <div class="current-weather-icon-info text-center fs-4">${
                            data.weather[0].main
                          }</div>
                          </div>
                          <div class="current-weather-temp d-flex flex-column">
                          <div class="current-weather-temp-text fw-bold text-primary mt-1">${Math.round(
                            data.main.temp
                          )}&deg;C</div>
                          <div class="text-capitalize fs-5">Real Feel ${Math.round(
                            data.main.feels_like
                          )}&deg;</div>
                          </div>
                          <div class="current-weather-day d-flex flex-column fs-4">
                          <div class="current-weather-day-text d-flex justify-content-between mb-1">
                              <div class="d-inline">Sunrise:</div>
                              <div class="d-inline">${todayDate.convertTimestamp(
                                data.sys.sunrise
                              )}</div>
                          </div>
                          <div class="current-weather-day-text d-flex justify-content-between my-1">
                              <div class="d-inline">Sunset:</div>
                              <div class="d-inline">${todayDate.convertTimestamp(
                                data.sys.sunset
                              )}</div>
                          </div>
                          <div class="current-weather-day-text d-flex justify-content-between my-1">
                              <div class="d-inline">Duration:</div>
                              <div class="d-inline">${todayDate.calculateDayDuration(
                                data.sys.sunrise,
                                data.sys.sunset
                              )} hr</div>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>`;
    $root.append(content);
  }

  async getHourlyWeather(lat, lon) {
    const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(api);
    const data = await response.json();

    console.log(data);
    return data;
  }
  async createHourlyWeatherSection() {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const data = await this.getHourlyWeather(
          pos.coords.latitude,
          pos.coords.longitude
        );
        this.displayHourlyWeather(data);
      } catch (error) {
        console.error("Failed to fetch hourly weather data:", error);
      }
    });
  }
  displayHourlyWeather(data) {
    let todayDate = new ExtendedDate();
    let content = `<div class="container">
                      <div class="hourly-weather d-flex flex-column my-4 pb-4 bg-light">
                      <div class="hourly-weather-text d-flex justify-content-start mb-3">
                          <h3 class="text-uppercase m-3">3-hourly</h3>
                      </div>
                      <div class="hourly-weather-table container">
                          <table class="table">
                          <thead>
                              <tr>
                              <th class="text-uppercase fs-4" style="vertical-align: text-top">today</th>`;
    for (let i = 0; i < 6; i++) {
      let hourData = data.list[i];
      content += `<th class="fw-normal">
                    <div class="text-center fw-bold">${todayDate.convertTimestamp(
                      hourData.dt
                    )}</div>
                    <div class="d-flex justify-content-center">
                    <img src="https://github.com/yuvraaaj/openweathermap-api-icons/blob/master/icons/${
                      hourData.weather[0].icon
                    }.png?raw=true" draggable="false" alt="weather-icon" class="d-inline" style="width: 64px; height: 64px"/>
                    </div>
                </th>`;
    }

    content += `</tr>
                  </thead>
                  <tbody>
                      <tr>
                      <td>Forecast</td>`;
    for (let i = 0; i < 6; i++) {
      let hourData = data.list[i];
      content += `<td class="text-center fw-bold">${hourData.weather[0].main}</td>`;
    }

    content += `</tr>
                  <tr>
                  <td>Temp (&deg;C)</td>`;
    for (let i = 0; i < 6; i++) {
      let hourData = data.list[i];
      content += `<td class="text-center fw-bold">${Math.round(
        hourData.main.temp
      )}&deg;</td>`;
    }

    content += `</tr>
                  <tr>
                  <td>RealFeel</td>`;
    for (let i = 0; i < 6; i++) {
      let hourData = data.list[i];
      content += `<td class="text-center fw-bold">${Math.round(
        hourData.main.feels_like
      )}&deg;</td>`;
    }

    content += `</tr>
                  <tr>
                  <td>Wind (km/h)</td>`;
    for (let i = 0; i < 6; i++) {
      let hourData = data.list[i];
      content += `<td class="text-center fw-bold">${hourData.wind.speed.toFixed(
        1
      )}</td>`;
    }

    content += `</tr>
                  <tr>
                  <td>Wind direction</td>`;
    for (let i = 0; i < 6; i++) {
      let hourData = data.list[i];
      content += `<td class="text-center fw-bold">${convertWindDirection(
        hourData.wind.deg
      )}</td>`;
    }

    content += `</tr>
                  </tbody>
              </table>
              </div>
          </div>
      </div>`;
    $root.append(content);
  }

  async getNearbyPlaces(lat, lon) {
    const delta = 0.1;
    const nearbyLat =
      lat + (Math.random() > 0.5 ? 1 : -1) * Math.random() * delta;
    const nearbyLon =
      lon + (Math.random() > 0.5 ? 1 : -1) * Math.random() * delta;

    const api = `https://api.openweathermap.org/data/2.5/find?lat=${nearbyLat}&lon=${nearbyLon}&cnt=5&appid=${apiKey}&units=metric`;
    const response = await fetch(api);
    const data = await response.json();

    console.log(data);
    return data;
  }
  async createNearbyPlacesSection() {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const data = await this.getNearbyPlaces(
          pos.coords.latitude,
          pos.coords.longitude
        );
        this.displayNearbyPlaces(data);
      } catch (error) {
        console.error("Failed to fetch nearby places:", error);
      }
    });
  }
  displayNearbyPlaces(data) {
    let content = `<div class="container">
                      <div class="nearby-places d-flex flex-column my-4 pb-4 bg-light">
                      <div class="nearby-places-text d-flex justify-content-start mb-3">
                          <h3 class="text-uppercase m-3">Nearby Places</h3>
                      </div>
                      <div class="nearby-places-list container">`;

    data.list.forEach((place) => {
      content += `<div class="nearby-place-item d-flex justify-content-between align-items-center my-2 p-2 bg-light border">
                      <div class="nearby-place-name fs-4">${place.name}</div>
                      <div class="nearby-place-temp fs-4">${Math.round(
                        place.main.temp
                      )}&deg;C</div>
                    </div>`;
    });

    content += `</div></div></div>`;
    $root.append(content);
  }

  async getWeatherByPlaceName(city, countryCode) {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;
    const response = await fetch(api);
    const data = await response.json();

    console.log(data);
    return data;
  }
  async getWeatherBySearchPlaceName() {
    const cityName = $searchInput.val().split(",")[0];
    const countryCode = $searchInput.val().split(",")[1];

    currentCity.cityName = cityName;
    currentCity.countryCode = countryCode;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}&units=metric`;
    const response = await fetch(api);
    const data = await response.json();

    if (data.cod !== "404") {
      saveCurrentCity();
      console.log("yeahhh");
      console.log(data);
      return data;
    } else {
      console.log("error");
      return null;
    }
  }

  async getFiveDayWeather(lat, lon) {
    const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(api);
    const data = await response.json();

    console.log(data);
    return data;
  }

  async displayFiveDays() {
    try {
      const storedCity = JSON.parse(localStorage.getItem("currentCity"));
      let data;

      if (storedCity) {
        const { cityName, countryCode } = storedCity;
        const weatherData = await this.getWeatherByPlaceName(cityName, countryCode);
        data = await this.getFiveDayWeather(weatherData.coord.lat, weatherData.coord.lon);
      } else {
        const defaultCityData = await this.getWeatherByPlaceName(defaultCity.cityName, defaultCity.countryCode);
        data = await this.getFiveDayWeather(defaultCityData.coord.lat, defaultCityData.coord.lon);
      }

      let content = '<div class="days container d-flex flex-row justify-content-between">';
      for (let i = 0; i < data.list.length; i += 8) {
        const dayData = data.list[i];
        const date = new Date(dayData.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        content += `
          <div class="day d-flex flex-column align-items-center p-3 mt-3 flex-grow-1">
            <h3 class="day-text text-uppercase">${dayName}</h3>
            <div class="day-data text-uppercase">${monthDay}</div>
            <img
              src="https://github.com/yuvraaaj/openweathermap-api-icons/blob/master/icons/${dayData.weather[0].icon}.png?raw=true"
              alt="weather-icon"
              style="width: 128px; height: 128px"
              draggable="false"
            />
            <div class="day-temp-text fs-4">${Math.round(dayData.main.temp)}&deg;C</div>
            <div class="day-desc-text fs-5">${dayData.weather[0].description}</div>
          </div>
        `;
      }
      content += '</div>';

      $root.html(content);
    } catch (error) {
      console.error("Error displaying five day forecast:", error);
    }
  }
}

const weather = new MyWeather();

$searchBtn.on("click", async (e) => {
  e.preventDefault();
  $root.html("");

  const data = await weather.getWeatherBySearchPlaceName();
  console.log("data 411line");
  console.log(data);
  if (data !== null) {
    console.log("complete");
    weather.displayCurrentWeather(data);
    const hourlyData = await weather.getHourlyWeather(
      data.coord.lat,
      data.coord.lon
    );
    weather.displayHourlyWeather(hourlyData);
    const nearbyPlacesData = await weather.getNearbyPlaces(
      data.coord.lat,
      data.coord.lon
    );
    weather.displayNearbyPlaces(nearbyPlacesData);
  } else {
    $root.html(`<div class="container my-5">
      <div class="alert alert-dismissible alert-danger">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong>Oh snap!</strong>
        Something went wrong. Try submitting again.
      </div>
    </div>`);
  }
});
