import { CartProduct } from './cart-product';

export interface CartProductList {
    products: Array<CartProduct>;
}

export const DEFAULT: CartProductList = {
    products: []
};
