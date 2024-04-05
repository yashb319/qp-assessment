import * as groceryService from '../services/groceryService.js';
export const viewAvailableItems = (req, res) => {
    const allItems = groceryService.getAllGroceryItems();
    res.json(allItems);
};
export const placeOrder = (req, res) => {
    const itemsToOrder = req.body.items;
    const orderedItems = [];
    for (const item of itemsToOrder) {
        const { id, quantity } = item;
        const selectedItem = groceryService.getGroceryItemById(id);
        if (selectedItem && selectedItem.inventory >= quantity) {
            orderedItems.push(Object.assign(Object.assign({}, selectedItem), { quantity }));
            groceryService.updateInventory(id, selectedItem.inventory - quantity);
        }
    }
    res.json({ message: "Order placed successfully", orderedItems });
};
