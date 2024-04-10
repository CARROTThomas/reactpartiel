import {OrderItem} from "./OrderItem.ts";

export interface OrderDetails{
    id: string;
    profile: {
        username: string;
    };
    items: OrderItem[];
}
