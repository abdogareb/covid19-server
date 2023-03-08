import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from './config/config.js';
import routesV1 from './routes/v1/index.js';

// Connect to mongo
mongoose
  .connect(config.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', routesV1);
app.use((req, res) =>
  res.status(404).send(`<h1>Can not find what you're looking for</h1>`)
);

app.listen(config.port, () => {
  console.log(`Server running at ${config.port}`);
});
