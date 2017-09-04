import { Action } from '@ngrx/store';
import * as model from '../../models/product-list';
import * as actions from '../actions/products';
import { merge, without, clone, find } from 'lodash';

export function reducer(state = model.DEFAULT, action: actions.Actions) : model.ProductList {
  const stateCopy = clone(state);
  switch (action.type) {
    case actions.ACTION_TYPES.LOADED:
      return merge({}, state, { products: action.payload });
    case actions.ACTION_TYPES.ADDED:
      return merge({}, state, { products: [ ...state.products, action.payload ]});
    case actions.ACTION_TYPES.UPDATED:
      stateCopy.products = without(state.products, find(state.products, (product) => product.name === action.payload.name));
      stateCopy.products.push(action.payload);
      return merge({}, stateCopy);
    case actions.ACTION_TYPES.REMOVED:
      stateCopy.products = without(state.products, action.payload);
      return merge({}, stateCopy);
    default:
      return state;
  }
}

export const getProducts = (state: model.ProductList) => state.products;
