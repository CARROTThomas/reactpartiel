import {CartItem} from "./CartItem.ts";

export interface CartData{
    profile: {
        username: string;
    };
    items: CartItem[];
}
