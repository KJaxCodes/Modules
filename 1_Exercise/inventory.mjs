// 1. **Named Exports and Imports:** Create an inventory management system for 
// an online store, practicing the use of named exports and imports.
//     - Implement `inventory.mjs`, exporting named functions: `addItem` that 
//     adds an item by name to the inventory array, `removeItem` that removes 
//     an item by name from the inventory array, `listItems` that logs all 
//     item names currently in the inventory.

const inventory = [];

export const addItem = (item) => {
    inventory.push(item);
    console.log(`${item} added to the inventory.`);
};

export const removeItem = (item) => {
    const index = inventory.indexOf(item);
    if (index !== -1) {
        inventory.splice(index, 1);
        console.log(`${item} removed from the inventory.`);
    } else {
        console.log(`${item} not found in the inventory.`);
    }
};

export const listItems = () => {
    console.log(`Listing all items:`);

    if (inventory.length === 0) {
        console.log(`Inventory empty`)
    }
    else {
        for (const item of inventory) {
            console.log(`* ${item}`);
        }
    }
};

