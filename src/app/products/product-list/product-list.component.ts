import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductsService } from '../../services/products.service';

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
  constructor(private productsService: ProductsService) {
    //this.anyPinned$ = this.getPinned().takeWhile(() => this.alive).map((cards) => cards.length > 0);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getProducts() {
    return this.productsService.load();
    // return this.store.select(fromRoot.getProducts)
    //   .takeWhile(() => this.alive);
  }

  addToCart(product) {
    //this.store.dispatch(new data.AddToCartAction(product));
  }
}
