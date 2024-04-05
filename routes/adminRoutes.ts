import express from 'express';
import { addGroceryItem, viewGroceryItems, removeGroceryItem, updateGroceryItem, manageInventory } from '../controllers/adminController';

const router = express.Router();

router.post('/grocery-items', addGroceryItem);
router.get('/grocery-items', viewGroceryItems);
router.delete('/grocery-items/:id', removeGroceryItem);
router.put('/grocery-items/:id', updateGroceryItem);
router.put('/inventory/:id', manageInventory);

export default router;