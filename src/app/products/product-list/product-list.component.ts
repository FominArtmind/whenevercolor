import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/takeWhile';
// import 'rxjs/add/operator/map';
// import {Observable} from 'rxjs/Observable';
import * as productsAct from '../../store/actions/products';
// import {clone} from 'lodash';
import * as reducers from '../../store/reducers';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="container-fluid text-center pb-5">
      <div class="row">
        <app-product *ngFor="let product of getProducts() | async"
                  [product]="product"
                  (onCartAdded)="addToCart($event)">
        </app-product>
      </div>
    </div>
  `,
  styles: []
})
export class ProductListComponent implements OnInit, OnDestroy {
  private alive = true;

  // constructor(private store: Store<fromRoot.State>) {
  constructor(private store: Store<reducers.State>) {
    // this.anyPinned$ = this.getPinned().takeWhile(() => this.alive).map((cards) => cards.length > 0);
  }

  ngOnInit() {
    this.store.dispatch(new productsAct.LoadAction(null));
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getProducts() {
    // return this.productsService.load();
    return this.store.select(reducers.getProducts)
      .takeWhile(() => this.alive);
  }

  addToCart(product) {
    // this.store.dispatch(new data.AddToCartAction(product));
  }
}
