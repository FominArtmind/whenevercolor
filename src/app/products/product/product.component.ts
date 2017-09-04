import { Component, OnInit, Input, Output, HostBinding, EventEmitter } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  template: `
    <div class="card">
      <div class="color-sample card-img-top" [style.background-color]="product.color" alt="color sample"></div>
      <div class="card-body">
        <h3 class="card-title">{{product.name}}</h3>
        <p class="card-text">{{product.description}}</p>
      </div>
      <h2>{{product.priceUsd}}$</h2>
      <button type="button" class="btn btn-primary waves-light" aria-label="Add to cart" (click)="addToCart()">
        <i class="fa fa-cart-plus" aria-hidden="true"></i>Add to cart
      </button>
    </div>
  `,
  styles: [`
    .card { margin-top: 1.5rem; }
    .color-sample { min-height: 9rem; }
  `]
})
export class ProductComponent implements OnInit {
  @HostBinding('class') class = 'col-xs-12 col-md-6 col-lg-4';
  @Input() product: Product;
  @Output() 'onCartAdded' = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  addToCart() {
    this.onCartAdded.emit(this.product);
  }
}
