import { Component, OnInit } from '@angular/core';
import { round } from 'lodash';

@Component({
  selector: 'app-cart',
  template: `
    <app-cart-product-list (onTotalPriceChanged)="changeTotalPrice($event)"></app-cart-product-list>
    <div class="container-fluid text-center last-block">
      <div class="card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col col-xs-6">
              <h2 class="card-title">Total price: {{roundPrice(totalPrice)}}$</h2>
            </div>
            <button class="btn btn-primary waves-light col col-xs-6" (onClick)="buy()">Buy</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .last-block { margin-bottom: 1.5rem; }
  `]
})
export class CartComponent implements OnInit {
  totalPrice = 0;

  constructor() { }

  ngOnInit() {
  }

  changeTotalPrice(value) {
    this.totalPrice = value;
  }

  roundPrice(value) {
    return (round(value * 100) / 100).toFixed(2);
  }

  buy() {
    // TO DO
  }
}
