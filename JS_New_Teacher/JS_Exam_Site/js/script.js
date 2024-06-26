const apiKey = "0cc091074db97585918ab121fb7f94d9";
const $root = $("#root");

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
class ExtendedDate extends Date {
  getFormattedDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedDate = dd + "." + mm + "." + yyyy;

    return formattedDate;
  }
  convertTimestamp(timestamp) {
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let convertedTimestamp = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    return convertedTimestamp;
  }
  calculateDayDuration(sunrise, sunset) {
    let duration = (sunset - sunrise) / 3600;
    let hours = Math.floor(duration);
    let minutes = Math.floor((duration - hours) * 60);

    return `${hours}:${minutes}`;
  }
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
    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const data = await new MyWeather().getCurrentWeather(
          pos.coords.latitude,
          pos.coords.longitude
        );
        let todayDate = new ExtendedDate();

        let content = `<div class="container">
                    <div class="current-weather d-flex flex-column my-4 pb-4 bg-light">
                    <div class="current-weather-text d-flex justify-content-between mb-3">
                        <h3 class="text-uppercase m-3">current weather</h3>
                        <h3 class="current-date m-3">${todayDate.getFormattedDate()}</h3>
                    </div>
                    <div
                        class="current-weather-data d-flex justify-content-around align-items-center"
                    >
                        <div
                        class="current-weather-icon d-flex flex-column align-items-center"
                        >
                        <img
                            src="https://github.com/yuvraaaj/openweathermap-api-icons/blob/master/icons/${
                              data.weather[0].icon
                            }.png?raw=true"
                            draggable="false"
                            alt="weather-icon"
                            style="width: 64px; height: 64px"
                        />
                        <div class="current-weather-icon-info text-center fs-4">
                            ${data.weather[0].main}
                        </div>
                        </div>
                        <div class="current-weather-temp d-flex flex-column">
                        <div class="current-weather-temp-text fw-bold text-primary mt-1">
                            ${Math.round(data.main.temp)}&deg;C
                        </div>
                        <div class="text-capitalize fs-5">Real Feel ${Math.round(
                          data.main.feels_like
                        )}&deg;</div>
                        </div>
                        <div class="current-weather-day d-flex flex-column fs-4">
                        <div
                            class="current-weather-day-text d-flex justify-content-between mb-1"
                        >
                            <div class="d-inline">Sunrise:</div>
                            <div class="d-inline">${todayDate.convertTimestamp(
                              data.sys.sunrise
                            )}</div>
                        </div>
                        <div
                            class="current-weather-day-text d-flex justify-content-between my-1"
                        >
                            <div class="d-inline">Sunset:</div>
                            <div class="d-inline">${todayDate.convertTimestamp(
                              data.sys.sunset
                            )}</div>
                        </div>
                        <div
                            class="current-weather-day-text d-flex justify-content-between my-1"
                        >
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
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    });
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
        const data = await new MyWeather().getHourlyWeather(
          pos.coords.latitude,
          pos.coords.longitude
        );
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
                              <th
                                  class="text-uppercase fs-4"
                                  style="vertical-align: text-top"
                              >
                                  today
                              </th>`;
        for (let i = 0; i < 6; i++) {
          let hourData = data.list[i];
          content += `<th class="fw-normal">
                      <div class="text-center fw-bold">${todayDate.convertTimestamp(
                        hourData.dt
                      )}</div>
                      <div class="d-flex justify-content-center">
                      <img
                          src="https://github.com/yuvraaaj/openweathermap-api-icons/blob/master/icons/${
                            hourData.weather[0].icon
                          }.png?raw=true"
                          draggable="false"
                          alt="weather-icon"
                          class="d-inline"
                          style="width: 64px; height: 64px"
                      />
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
          content += `<td class="text-center text-uppercase fw-bold">${Math.round(
            hourData.wind.speed
          )} ${convertWindDirection(hourData.wind.deg)}</td>`;
        }
        content += `</tr>
                  </tbody>
                  </table>
              </div>
              </div>
          </div>`;

        $root.append(content);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    });
  }

  async getNearbyPlacesWeather(lat, lon) {
    const currentLat = lat;
    const currentLon = lon;

    const delta = 0.4;

    const nearbyLat =
      currentLat + (Math.random() > 0.5 ? 1 : -1) * Math.random() * delta;
    const nearbyLon =
      currentLon + (Math.random() > 0.5 ? 1 : -1) * Math.random() * delta;

    const data = await new MyWeather().getCurrentWeather(nearbyLat, nearbyLon);

    console.log(data);
    return data;
  }
  async createNearbyPlacesWeatherSection() {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        let content = `<div class="container">
                                <div class="nearby-places d-flex flex-column my-4 pb-4 bg-light">
                                <div class="nearby-places-text d-flex justify-content-start mb-3">
                                    <h3 class="text-uppercase m-3">nearby places</h3>
                                </div>
                                <div class="container nearby-places-info d-flex flex-column">
                                    <div class="row">`;
        for (let i = 0; i < 2; i++) {
          const nearbyData = await new MyWeather().getNearbyPlacesWeather(
            pos.coords.latitude,
            pos.coords.longitude
          );
          content += `<div class="col-6 d-flex justify-content-between fs-3 p-4">
                                        <div
                                        class="nearby-places-name d-flex align-items-center fw-bold"
                                        >
                                        ${nearbyData.name}
                                        </div>
                                        <div class="d-flex align-items-center">
                                        <img
                                            src="https://github.com/yuvraaaj/openweathermap-api-icons/blob/master/icons/${
                                              nearbyData.weather[0].icon
                                            }.png?raw=true"
                                            draggable="false"
                                            alt="weather-icon"
                                            style="width: 48px; height: 48px"
                                            class="me-3"
                                        />
                                        ${Math.round(
                                          nearbyData.main.temp
                                        )}&deg;C
                                        </div>
                                    </div>`;
        }
        content += `</div>
                    <hr/>
                    <div class="row">`;

        for (let i = 0; i < 2; i++) {
          const nearbyData = await new MyWeather().getNearbyPlacesWeather(
            pos.coords.latitude,
            pos.coords.longitude
          );
          content += `<div class="col-6 d-flex justify-content-between fs-3 p-4">
                                        <div
                                        class="nearby-places-name d-flex align-items-center fw-bold"
                                        >
                                        ${nearbyData.name}
                                        </div>
                                        <div class="d-flex align-items-center">
                                        <img
                                            src="https://github.com/yuvraaaj/openweathermap-api-icons/blob/master/icons/${
                                              nearbyData.weather[0].icon
                                            }.png?raw=true"
                                            draggable="false"
                                            alt="weather-icon"
                                            style="width: 48px; height: 48px"
                                            class="me-3"
                                        />
                                        ${Math.round(
                                          nearbyData.main.temp
                                        )}&deg;C
                                        </div>
                                    </div>`;
        }
        content += `</div>`;
        $root.append(content);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    });
  }
}

let myWeather = new MyWeather();

myWeather.createCurrentWeatherSection();
myWeather.createHourlyWeatherSection();
myWeather.createNearbyPlacesWeatherSection();
