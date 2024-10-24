import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req: Request, res: Response) => {
  // console.log(req, res);
   // TODO: GET weather data from city name
  WeatherService.getWeatherForCity(req.body.cityName)
  .then(data => {
    // console.log(data);
    // TODO: save city to search history
    HistoryService.addCity(req.body.cityName);
    res.json(data);
})
});

// TODO: GET search history
router.get('/history', async (_req: Request, res: Response) => {
  HistoryService.getCities()
  .then(data => {
    // console.log(data);
    res.json(data);
  })
});

// // * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {
  HistoryService.removeCity(req.params.id)
  .then(data => {
    res.json(data);
  })
});

export default router;
