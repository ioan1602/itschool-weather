var currenSelectedtCity = localStorage.getItem("selectedCity") || "Oradea";
updateSelectedCity(currenSelectedtCity);
displayCurrentWeather(currenSelectedtCity);
displayForecast(currenSelectedtCity);