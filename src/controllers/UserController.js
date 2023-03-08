import UserService from '../services.js/UserService.js';

const userService = new UserService();

export const updateUser = async (req, res) => {
  try {
    const accessToken = await userService.getAccessToken();
    const updatedUser = await userService.updateUser(
      req.params.id,
      accessToken.access_token,
      req.body
    );
    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(400).json(err.message);
  }
};
