import Temperature from '../models/Temperature.js';

export default class TemperatureService {
  async create(body) {
    try {
      const document = await Temperature.create(body);
      return document;
    } catch (err) {
      throw new Error(`Could not add new temperature. Error: ${err.message}`);
    }
  }
  async getAll() {
    try {
      const documents = await Temperature.find();
      return documents;
    } catch (err) {
      throw new Error(`Could not find temperature values. Error: ${err.message}`);
    }
  }
}
