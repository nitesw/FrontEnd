const apiKey = "0cc091074db97585918ab121fb7f94d9";

$("#btn-current").on("click", () => {
  navigator.geolocation.getCurrentPosition(async (pos) => {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${apiKey}&units=metric`;

    const response = await fetch(api);
    const data = await response.json();

    console.log(data);
  });
});
$("#btn-hourly").on("click", () => {
  navigator.geolocation.getCurrentPosition(async (pos) => {
    let api = `https://api.openweathermap.org/data/2.5/forecast?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${apiKey}&units=metric`;

    const response = await fetch(api);
    const data = await response.json();

    console.log(data);
  });
});
$("#btn-near").on("click", fetchNearbyWeather);
function fetchNearbyWeather() {
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const currentLat = pos.coords.latitude;
    const currentLon = pos.coords.longitude;

    const delta = 0.2;

    const nearbyLat =
      currentLat + (Math.random() > 0.5 ? 1 : -1) * Math.random() * delta;
    const nearbyLon =
      currentLon + (Math.random() > 0.5 ? 1 : -1) * Math.random() * delta;

    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${nearbyLat}&lon=${nearbyLon}&appid=${apiKey}&units=metric`;

    const response = await fetch(api);
    const data = await response.json();

    console.log(data);
  });
}
