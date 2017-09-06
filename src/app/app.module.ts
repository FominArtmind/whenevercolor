import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UIRouterModule } from '@uirouter/angular';
import { MAIN_STATES, uiRouterConfigFn } from './app.states';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reducers } from './store/reducers/index';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/products';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';

import { ProductsService } from './services/products.service';
import { CartProductListComponent } from './cart/cart-product-list/cart-product-list.component';
import { CartProductComponent } from './cart/cart-product/cart-product.component';
import { ProfileOrderListComponent } from './profile/profile-order-list/profile-order-list.component';
import { ProfileOrderComponent } from './profile/profile-order/profile-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProfileComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    CartProductListComponent,
    CartProductComponent,
    ProfileOrderListComponent,
    ProfileOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    UIRouterModule.forRoot({
      states: MAIN_STATES,
      useHash: true,
      config: uiRouterConfigFn
    }),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    // StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ProductsEffects]),
  ],
  providers: [ProductsService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
