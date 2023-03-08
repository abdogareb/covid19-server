import axios from 'axios';
import { config } from '../config/config.js';

export default class UserService {
  async getAccessToken() {
    const options = {
      method: 'POST',
      url: `${config.auth0.issuer}oauth/token`,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: config.auth0.clientID,
        client_secret: config.auth0.clientSecret,
        audience: config.auth0.audience
      })
    };
    let res;
    await axios
      .request(options)
      .then(function (response) {
        res = response.data;
      })
      .catch(function (error) {
        throw new Error(`Could not get the access token. Error: ${error}`);
      });
    return res;
  }
  async updateUser(userID, accessToken, body) {
    const options = {
      method: 'PATCH',
      url: `${config.auth0.issuer}api/v2/users/${userID}`,
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
        'cache-control': 'no-cache'
      },
      data: JSON.stringify({
        email: body.email,
        name: body.name,
        nickname: body.nickname,
        picture: body.picture
      })
    };
    let res;
    await axios
      .request(options)
      .then(function (response) {
        res = response.data;
      })
      .catch(function (error) {
        throw new Error(`Could not update user. Error: ${error}`);
      });
    return res;
  }
}
