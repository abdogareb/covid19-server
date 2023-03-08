import { Schema, model } from 'mongoose';

const TemperatureSchema = new Schema({
  // Name: {
  //   type: String,
  //   required: false,
  // },
  // LC: {
  //   type: String,
  //   required: false,
  // },
  temperature: { type: Number, required: true },
  location: { type: [Number], required: true },
  name: { type: String, required: true }
});

export default model('Temperature', TemperatureSchema);
