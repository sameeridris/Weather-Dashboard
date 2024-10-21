import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object

// TODO: Define a class for the Weather object

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchWeatherData method
  private async fetchForecastData(coordinates: Coordinates) {
    let forecastData= await fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.API_KEY}`);
    let weatherJSON= await forecastData.json()
    return weatherJSON.list;
  }
  // TODO: Build parseCurrentWeather method
  private async fetchCurrentWeather(coordinates: Coordinates) {
    let WeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.API_KEY}`)
    let weatherJSON= await WeatherData.json()
    return weatherJSON;
  }
  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}

export default new WeatherService();
