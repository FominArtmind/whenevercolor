import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { Order } from '../../models/order';

@Component({
  selector: 'app-profile-order',
  template: `
    <div class="card">
      <h2 class="order-title">Order id: {{order.id}} ({{order.completed ? 'completed' : 'processing'}})</h2>
      <div *ngFor="let product of order.productList.products" class="row align-items-center">
        <div class="col-6">
          <div class="color-sample card-img-top" [style.background-color]="product.product.color" alt="color sample"></div>
          <div class="card-body">
            <h3 class="card-title">{{product.product.name}}</h3>
            <p class="card-text">{{product.product.description}}</p>
          </div>
        </div>
        <div class="col-6">
          <h2>{{product.product.priceUsd}}$</h2>
          <h3 class="quantity">
            x{{product.quantity}}
          </h3>
        </div>
      </div>
    </div>
`,
styles: [`
  .order-title { margin-top: 1.5rem; margin-bottom: 1.5rem; }
  .card { margin-top: 1.5rem; }
  .color-sample { min-height: 6rem; }
  .quantity { margin-top: 1.5rem; }
  `]
})
export class ProfileOrderComponent implements OnInit {
  @HostBinding('class') class = 'col-12';
  @Input() order: Order;

  constructor() { }

  ngOnInit() {
  }
}
