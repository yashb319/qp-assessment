import express from 'express';
import { viewAvailableItems, placeOrder } from '../controllers/userController.js';
const router = express.Router();
router.get('/grocery-items', viewAvailableItems);
router.post('/orders', placeOrder);
export default router;
