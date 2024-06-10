var dropdownItems = document.querySelectorAll(".city");
var selectedCity = document.querySelector(".city-btn");

dropdownItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    var city = event.target.innerText;
    selectedCity.innerText = city;
    displayCurrentWeather(city);
    displayForecast(city);
    localStorage.setItem("selectedCity", city);
  });
});

function updateSelectedCity(city) {
    var selectedCity = document.querySelector(".city-btn");
    selectedCity.innerText = city;
}