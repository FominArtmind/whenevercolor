import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductsService {
    constructor(private http: HttpClient) { }

    load() {
        return Observable.of([
            {
                name: 'Cyan',
                description: 'Fresh and modern',
                color: 'cyan',
                priceUsd: '9.99'
            },
            {
                name: 'Black',
                description: 'Pure classic',
                color: 'black',
                priceUsd: '19.99'
            },
            {
                name: 'Indigo',
                description: 'Wild and breath taking',
                color: 'indigo',
                priceUsd: '27.99'
            },
        ]);
        // return this.http.get(`/api/v1/cards.json`);
    }

    add(payload) {
        return Observable.of();
    }

    remove(payload) {
        return Observable.of();
    }

    update(payload) {
        return Observable.of();
    }

  // add(payload) {
  //   return this.http.post(`/api/v1/cards.json`, {text: trim(payload)});
  // }

  // remove(payload) {
  //   return this.http.delete(`/api/v1/cards/${payload.id}.json`);
  // }

  // update(payload) {
  //   return this.http.patch(`/api/v1/cards/${payload.id}.json`, payload);
  // }
}
