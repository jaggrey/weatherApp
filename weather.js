// For API request
class Weather {
  constructor(city) {
    this.apiKey = '4c6d22d892ad39366145c55eac868355';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}