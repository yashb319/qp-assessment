interface GroceryItem {
    id: number;
    name: string;
    price: number;
    inventory: number;
}

let groceryItems: GroceryItem[] = [
    { id: 1, name: 'Apples', price: 2.99, inventory: 50 },
    { id: 2, name: 'Bananas', price: 1.99, inventory: 100 },
    { id: 3, name: 'Oranges', price: 3.49, inventory: 30 }
];

export const addGroceryItem = (newItem: GroceryItem): GroceryItem => {
    newItem.id = groceryItems.length + 1;
    groceryItems.push(newItem);
    return newItem;
};

export const getAllGroceryItems = (): GroceryItem[] => {
    return groceryItems;
};

export const getGroceryItemById = (id: number): GroceryItem | undefined => {
    return groceryItems.find(item => item.id === id);
};

export const removeGroceryItem = (id: number): void => {
    groceryItems = groceryItems.filter(item => item.id !== id);
};

export const updateGroceryItem = (id: number, updatedItem: GroceryItem): GroceryItem | undefined => {
    const index = groceryItems.findIndex(item => item.id === id);
    if (index !== -1) {
        groceryItems[index] = { ...groceryItems[index], ...updatedItem };
        return groceryItems[index];
    }
    return undefined;
};

export const updateInventory = (id: number, newInventory: number): GroceryItem | undefined => {
    const index = groceryItems.findIndex(item => item.id === id);
    if (index !== -1) {
        groceryItems[index].inventory = newInventory;
        return groceryItems[index];
    }
    return undefined;
};