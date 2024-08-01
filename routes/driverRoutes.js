import express from 'express';
import { registerDriverController, verifyDriverController, getAll, getById, update, remove } from '../controllers/driverController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import validate from '../middleware/validateMiddleware.js';
import { driverSchema } from '../validations/driverValidation.js';

const router = express.Router();

router.post('/register', authMiddleware, validate(driverSchema), registerDriverController);
router.post('/:id/verify', authMiddleware, verifyDriverController);
router.get('/', authMiddleware, getAll);
router.get('/:id', authMiddleware, getById);
router.put('/:id', authMiddleware, validate(driverSchema), update);
router.delete('/:id', authMiddleware, remove);

export default router;
