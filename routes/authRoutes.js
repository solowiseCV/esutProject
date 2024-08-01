import express from 'express';
import { registerUser, loginUser } from '../controllers/authControllers.js';
import validate from '../middleware/validateMiddleware.js';
import { registerSchema, loginSchema } from '../validations/authValidation.js';

const router = express.Router();

router.post('/register', validate(registerSchema), registerUser);
router.post('/login', validate(loginSchema), loginUser);

export default router;
