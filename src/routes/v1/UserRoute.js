import express from 'express';
import { updateUser } from '../../controllers/UserController.js';
import checkJwt from '../../middlewares/auth.js';

const router = express.Router();

router.route('/:id').patch(checkJwt,updateUser);

export default router;
