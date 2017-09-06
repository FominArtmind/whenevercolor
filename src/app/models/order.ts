import { CartProductList } from './cart-product-list';

export interface Order {
    id: number;
    productList: CartProductList;
    completed: boolean;
}
