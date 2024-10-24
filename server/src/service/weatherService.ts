import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: string,
  lon: string,
}

class WeatherService {
  private async fetchForecastData(coordinates: Coordinates) {
    console.log(coordinates);
    let forecastData= await fetch (`https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.API_KEY}`);
    let weatherJSON= await forecastData.json()
    return weatherJSON.list;
  }
  // TODO: Build parseCurrentWeather method
  private async fetchCurrentWeather(coordinates: Coordinates) {
    let WeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.API_KEY}`);
    let weatherJSON= await WeatherData.json()
    return weatherJSON;
  }
  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: any, weatherData: any[]) {
    const forecastArray = [currentWeather];
    const indices = [4, 12, 20, 28, 34];
   
    for (let i = 0; i < indices.length; i++) {
      if (weatherData[indices[i]]) {
        forecastArray.push(weatherData[indices[i]]);
      }
    }
    return forecastArray;
  }
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    let locationData = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`);
    let locationJSON = await locationData.json();
    let forecastData= await this.fetchForecastData(locationJSON[0]);
    let currentWeather= await this.fetchCurrentWeather(locationJSON[0]);
    let forecastArray= this.buildForecastArray(currentWeather, forecastData);
    console.log(forecastArray.length);
    return forecastArray;
  }
}

export default new WeatherService();
