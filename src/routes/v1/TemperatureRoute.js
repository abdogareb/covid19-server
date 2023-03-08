import express from 'express';
import { create, getAll } from '../../controllers/TemperatureController.js';
import checkJwt from '../../middlewares/auth.js';
import { temperatureCreateValidation } from '../../validations/Temperature.Validation.js';
import validate from '../../middlewares/validate.js';
// import TemperatureController from "../../controllers/TemperatureController";

const router = express.Router();

router
  .route('/')
  .post(checkJwt, validate(temperatureCreateValidation), create)
  .get(getAll);

export default router;
