import { Product } from './product';

export interface ProductList {
    products: Array<Product>;
}

export const DEFAULT: ProductList = {
    products: []
};
