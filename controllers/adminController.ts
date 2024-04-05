import { Request, Response } from 'express';
import * as groceryService from '../services/groceryService';

export const addGroceryItem = (req: Request, res: Response) => {
    const { name, price, inventory } = req.body;
    const newItem = { id: 0, name, price, inventory }; 
    const addedItem = groceryService.addGroceryItem(newItem);
    res.json(addedItem);
};

export const viewGroceryItems = (req: Request, res: Response) => {
    const allItems = groceryService.getAllGroceryItems();
    res.json(allItems);
};

export const removeGroceryItem = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    groceryService.removeGroceryItem(id);
    res.sendStatus(204);
};

export const updateGroceryItem = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, price, inventory } = req.body;
    const updatedItem = { id, name, price, inventory };
    const updated = groceryService.updateGroceryItem(id, updatedItem);
    if (updated) {
        res.json(updated);
    } else {
        res.sendStatus(404);
    }
};

export const manageInventory = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { inventory } = req.body;
    const updated = groceryService.updateInventory(id, inventory);
    if (updated) {
        res.json(updated);
    } else {
        res.sendStatus(404);
    }
};
