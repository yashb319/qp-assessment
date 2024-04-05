import { Request, Response } from 'express';
import * as groceryService from '../services/groceryService';

export const viewAvailableItems = (req: Request, res: Response) => {
    const allItems = groceryService.getAllGroceryItems();
    res.json(allItems);
};

export const placeOrder = (req: Request, res: Response) => {
    const itemsToOrder = req.body.items;
    const orderedItems = [];
    for (const item of itemsToOrder) {
        const { id, quantity } = item;
        const selectedItem = groceryService.getGroceryItemById(id);
        if (selectedItem && selectedItem.inventory >= quantity) {
            orderedItems.push({ ...selectedItem, quantity });
            groceryService.updateInventory(id, selectedItem.inventory - quantity);
        }
    }
    res.json({ message: "Order placed successfully", orderedItems });
};