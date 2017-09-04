import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <h2>Our exclusive offers</h2>
    <app-product-list></app-product-list>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
