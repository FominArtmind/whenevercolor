import { createSelector } from 'reselect';
import { ActionReducerMap } from '@ngrx/store';
// import { ActionReducer,  MetaReducer } from '@ngrx/store';
// import { compose } from '@ngrx/store';
// import { storeLogger } from 'ngrx-store-logger';
// import { localStorageSync } from 'ngrx-store-localstorage';
// import { storeFreeze } from 'ngrx-store-freeze';
// import { combineReducers } from '@ngrx/store';

// import { environment } from '../../environments/environment';

import * as productListModel from '../../models/product-list';

import * as productsReducer from './products';

export interface State {
    productList: productListModel.ProductList;
}

export const reducers: ActionReducerMap<State> = {
  productList: productsReducer.reducer,
};

// export function logger(reducer: ActionReducer<State>): any {
//   // default, no options
//   return storeLogger()(reducer);
// }

// export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
//   return localStorageSync({keys: ['ui'], rehydrate: true})(reducer);
// }

// export const metaReducers: MetaReducer<State>[] = !environment.production
//   ? [logger, localStorageSyncReducer]
//   : [localStorageSyncReducer];

export const getProductsState = (state: State) => state.productList;

export const getProducts = createSelector(getProductsState, productsReducer.getProducts);
