let groceryItems = [
    { id: 1, name: 'Apples', price: 2.99, inventory: 50 },
    { id: 2, name: 'Bananas', price: 1.99, inventory: 100 },
    { id: 3, name: 'Oranges', price: 3.49, inventory: 30 }
];
export const addGroceryItem = (newItem) => {
    newItem.id = groceryItems.length + 1;
    groceryItems.push(newItem);
    return newItem;
};
export const getAllGroceryItems = () => {
    return groceryItems;
};
export const getGroceryItemById = (id) => {
    return groceryItems.find(item => item.id === id);
};
export const removeGroceryItem = (id) => {
    groceryItems = groceryItems.filter(item => item.id !== id);
};
export const updateGroceryItem = (id, updatedItem) => {
    const index = groceryItems.findIndex(item => item.id === id);
    if (index !== -1) {
        groceryItems[index] = Object.assign(Object.assign({}, groceryItems[index]), updatedItem);
        return groceryItems[index];
    }
    return undefined;
};
export const updateInventory = (id, newInventory) => {
    const index = groceryItems.findIndex(item => item.id === id);
    if (index !== -1) {
        groceryItems[index].inventory = newInventory;
        return groceryItems[index];
    }
    return undefined;
};
