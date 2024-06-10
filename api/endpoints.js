const apiKey = "95e90997577faabb9d28d6352a00d0b3";
var language = "ro";
var units = "metric";

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${language}&units=${units}`;
}

function getWeatherIcon(iconcode) {
  return `https://openweathermap.org/img/wn/${iconcode}@2x.png`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=${language}&units=${units}`;
}