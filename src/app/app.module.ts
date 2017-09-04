import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UIRouterModule } from '@uirouter/angular';
import { MAIN_STATES, uiRouterConfigFn } from './app.states';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';

import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProfileComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    UIRouterModule.forRoot({
      states: MAIN_STATES,
      useHash: true,
      config: uiRouterConfigFn
    })
  ],
  providers: [ProductsService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
