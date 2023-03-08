import express from 'express';
import temperatureRoute from './TemperatureRoute.js';
import userRoute from './UserRoute.js';

const router = express.Router();

router.use('/temperature', temperatureRoute);
router.use('/user', userRoute);
export default router;
