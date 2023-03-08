import { expressjwt } from 'express-jwt';
import jwksRsa from 'jwks-rsa';

import { config } from '../config/config.js';

const checkJwt = expressjwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: config.auth0.jwksUri
  }),

  // Validate the audience and the issuer.
  audience: config.auth0.audience,
  issuer: config.auth0.issuer,
  algorithms: ['RS256']
});

export default checkJwt;
