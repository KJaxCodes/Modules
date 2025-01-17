// 1. **Named Exports and Imports:** Create an inventory management system for 
// an online store, practicing the use of named exports and imports.
//     - Implement `inventory.mjs`, exporting named functions: `addItem` that 
//     adds an item by name to the inventory array, `removeItem` that removes 
//     an item by name from the inventory array, `listItems` that logs all 
//     item names currently in the inventory.

const inventory = [];

export function addItem(item) {
    inventory.push(item);
    console.log(`${item} added to the inventory`);
};

export function removeItem(item) {
    console.log("remove item");
    const itemsPresent = inventory.indexOf(item);
    if (itemsPresent > -1) {
        inventory.splice(item, 1);
        console.log(`${item} removed`);
    } else {
        console.log(`${item} not found`);
    }
};

export const listItems = () => {
    if (inventory.length === 0) {
        console.log("Inventory empty");
    } else {
        console.log("Current inventory includes:")
        for (const item of inventory) {
            console.log(`${item}`);
        }
    }

}

