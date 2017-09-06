import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/takeWhile';
// import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import * as productsAct from '../../store/actions/products';
// import {clone} from 'lodash';
import * as reducers from '../../store/reducers';
import { merge, without, clone, find } from 'lodash';

import { CartProduct } from '../../models/cart-product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-product-list',
  template: `
    <div class="container-fluid text-center pb-5">
      <div class="row">
        <app-cart-product *ngFor="let product of getCartProducts() | async"
                  [product]="product.product"
                  [quantity]="product.quantity"
                  (onQuantityChanged)="changeQuantity($event)"
                  (onRemoved)="removeFromCart($event)">
        </app-cart-product>
      </div>
    </div>
  `,
  styles: []
})
export class CartProductListComponent implements OnInit, OnDestroy {
  @Output() 'onTotalPriceChanged' = new EventEmitter<number>();

  private alive = true;
  private products: Array<CartProduct> = [
    {
      product: {
        name: 'Cyan',
        description: 'Fresh and modern',
        color: 'cyan',
        priceUsd: 9.99
      },
      quantity: 1
    },
    {
      product: {
        name: 'Black',
        description: 'Pure classic',
        color: 'black',
        priceUsd: 19.99
      },
      quantity: 3
    },
    {
      product: {
        name: 'Indigo',
        description: 'Wild and breath taking',
        color: 'indigo',
        priceUsd: 27.99
      },
      quantity: 11
    }
  ];

  constructor(private store: Store<reducers.State>) {
  }

  ngOnInit() {
    // this.store.dispatch(new productsAct.LoadAction(null));
    this.onTotalPriceChanged.emit(this.totalPrice());
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getCartProducts() {
    return Observable.of(this.products);
    // return this.store.select(reducers.getProducts)
    //   .takeWhile(() => this.alive);
  }

  totalPrice() : number {
    let price = 0;
    for(const product of this.products) {
      price += product.quantity * product.product.priceUsd;
    }
    return price;
  }

  removeFromCart(product) {
    // this.store.dispatch(new data.AddToCartAction(product));
    this.products = without(this.products, find(this.products, (item: CartProduct) => product.name === item.product.name));
    this.onTotalPriceChanged.emit(this.totalPrice());
  }

  changeQuantity(cartProduct) {
    const changingProduct = find(this.products, (item: any) => cartProduct.product.name === item.product.name);
    changingProduct.quantity = cartProduct.quantity;
    this.onTotalPriceChanged.emit(this.totalPrice());
    // this.store.dispatch(new data.AddToCartAction(product));
  }
}
