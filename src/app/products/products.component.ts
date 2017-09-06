import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <h2 class="title">Our exclusive offers</h2>
    <app-product-list></app-product-list>
  `,
  styles: [`
    .title { margin-top: 1.5rem; margin-left: 1.5rem; }
  `]
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
