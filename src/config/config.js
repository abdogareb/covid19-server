import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT,
  mongoDB: process.env.MONGODB_URL,
  auth0: {
    jwksUri: process.env.JWKSURI,
    audience: process.env.IDENTIFIER,
    issuer: process.env.ISSUER,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  }
};
