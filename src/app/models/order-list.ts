import { Order } from './order';

export interface OrderList {
    orders: Array<Order>;
}

export const DEFAULT: OrderList = {
    orders: []
};
