import TemperatureService from '../services.js/TemperatureService.js';

const temperatureService = new TemperatureService();
export const create = async (req, res) => {
  try {
    const { body } = req;
    const temperature = await temperatureService.create(body);
    res.status(201).send(temperature);
  } catch (err) {
    res.status(400).json(err.message);
  }
};
export const getAll = async (req, res) => {
  try {
    const temperatures = await temperatureService.getAll();
    res.status(200).send(temperatures);
  } catch (err) {
    res.status(400).json(err.message);
  }
};
