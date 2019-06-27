class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-description');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.temp = document.getElementById('w-temp');
    this.minTemp = document.getElementById('w-mintemp');
    this.maxTemp = document.getElementById('w-maxtemp');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].main;
    this.string.textContent = `${weather.main.temp} ℃`;
    this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidy: ${weather.main.humidity} %`;
    this.minTemp.textContent = `Minimum Temperature: ${weather.main.temp_min} ℃`;
    this.maxTemp.textContent = `Maximum Temperature: ${weather.main.temp_max} ℃`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} mph`;
  }
}