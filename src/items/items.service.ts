// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";

/**
 * In-Memory Store
 */

let items: Items = {
    1: {
        id: 1,
        name: "Burger",
        price: 599,
        description: "Tasty",
        image: "https://i.imgur.com/WVszpXZ.png"
    },
	2: {
		id: 2,
		name: "Pizza",
		price: 299,
		description: "Cheesy",
		image: "https://i.imgur.com/B6fQ15Z.png"
    },
  	3: {
		id: 3,
		name: "Tea",
		price: 199,
		description: "Informative",
		image: "https://i.imgur.com/Rm2fFqi.jpeg"
    }
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => Object.values(items);
export const find = async (id: number): Promise<Item> => items[id];

// Create
export const create = async (newItem: BaseItem): Promise<Item> => {
    const id = new Date().valueOf();

    items[id] = {
        id,
        ...newItem,
    };
    return items[id];
};


// Update
export const update = async (
    id: number,
    itemUpdate: BaseItem
): Promise<Item | null> => {
    const item = await find(id);

    if (!item) {
        return null;
    }

    items[id] = { id, ...itemUpdate };
    return items[id];
};

// Delete
export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);

    if (!item) {
        return null;
    }

    delete items[id];
};
