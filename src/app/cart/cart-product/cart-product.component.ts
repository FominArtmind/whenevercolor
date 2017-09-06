import { Component, OnInit, Input, Output, HostBinding, EventEmitter } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-product',
  template: `
    <div class="card">
      <div class="row align-items-center">
        <div class="col-4">
          <div class="color-sample card-img-top" [style.background-color]="product.color" alt="color sample"></div>
          <div class="card-body">
            <h3 class="card-title">{{product.name}}</h3>
            <p class="card-text">{{product.description}}</p>
          </div>
        </div>
        <div class="col-5">
          <h2>{{product.priceUsd}}$</h2>
          <h3 class="quantity">
            <a role="button" (click)="increaseQuantity()">
              <i class="fa fa-plus"></i>
            </a>
            &nbsp;&nbsp;x{{quantity}}&nbsp;&nbsp;
            <a role="button" (click)="decreaseQuantity()">
              <i class="fa fa-minus"></i>
            </a>
          </h3>
        </div>
        <div class="col-3">
          <button type="button" class="btn btn-warning waves-light" aria-label="Remove" (click)="removeFromCart()">
            <i class="fa fa-remove" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card { margin-top: 1.5rem; }
    .color-sample { min-height: 9rem; }
    .quantity { margin-top: 1.5rem; }
  `]
})
export class CartProductComponent implements OnInit {
  @HostBinding('class') class = 'col-12';
  @Input() product: Product;
  @Input() quantity: number;
  @Output() 'onQuantityChanged' = new EventEmitter<{ product: Product, quantity: number }>();
  @Output() 'onRemoved' = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  changeQuantity(value) {
    this.onQuantityChanged.emit({ product: this.product, quantity: value });
  }

  increaseQuantity() {
    this.changeQuantity(this.quantity + 1);
  }

  decreaseQuantity() {
    if(this.quantity > 1) {
      this.changeQuantity(this.quantity - 1);
    }
  }

  removeFromCart() {
    this.onRemoved.emit(this.product);
  }
}
