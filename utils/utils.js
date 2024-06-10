function capitalizeLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getWeekDay(dt) {
  return capitalizeLetter(
    new Date(dt * 1000).toLocaleDateString("ro-RO", { weekday: "long" })
  );
}

function getTime(dt) {
  return new Date(dt * 1000).toLocaleTimeString("ro-RO", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getTemperature(temp) {
  return Math.round(temp) + "°C";
}

function getRealFeel(feels_like) {
  return Math.round(feels_like) + "°C";
}

function getWindSpeed(wind) {
  return Math.round(wind.speed * 3.6) + " km/h";
}

function getWeatherDescription(weather) {
  return weather[0].description;
}
