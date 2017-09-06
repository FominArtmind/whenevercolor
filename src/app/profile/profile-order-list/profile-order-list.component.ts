import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { OrderList } from '../../models/order-list';

@Component({
  selector: 'app-profile-order-list',
  template: `
    <div class="container-fluid text-center pb-5">
      <div class="row">
        <app-profile-order *ngFor="let order of (getOrders() | async).orders"
                  [order]="order">
        </app-profile-order>
      </div>
    </div>
  `,
  styles: []
})
export class ProfileOrderListComponent implements OnInit, OnDestroy {
  private alive = true;

  // private store: Store<reducers.State>
  constructor() {
  }

  ngOnInit() {
    // this.store.dispatch(new productsAct.LoadAction(null));
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getOrders() : Observable<OrderList> {
    return Observable.of({
      orders: [
        {
          id: 1,
          productList:
            {
              products: [
                {
                  product: {
                    name: 'indigo',
                    description: 'wild and breath taking',
                    color: 'indigo',
                    priceUsd: 27.99
                  },
                  quantity: 1
                },
                {
                  product: {
                    name: 'blue',
                    description: 'fresh taste of splin',
                    color: 'blue',
                    priceUsd: 12.99
                  },
                  quantity: 2
                }
              ]
            },
          completed: false
        },
        {
          id: 0,
          productList:
            {
              products: [
                {
                  product: {
                    name: 'indigo',
                    description: 'wild and breath taking',
                    color: 'indigo',
                    priceUsd: 27.99
                  },
                  quantity: 2
                },
                {
                  product: {
                    name: 'blue',
                    description: 'fresh taste of splin',
                    color: 'blue',
                    priceUsd: 12.99
                  },
                  quantity: 4
                }
              ]
            },
          completed: true
        }
      ]
    });

    // return this.store.select(reducers.getProducts)
    //   .takeWhile(() => this.alive);
  }
}
