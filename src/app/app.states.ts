import { Ng2StateDeclaration, UIRouter } from '@uirouter/angular';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { Injector } from '@angular/core';

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  router.urlService.rules.otherwise({ state: 'products' });
}

export let MAIN_STATES: Ng2StateDeclaration[] = [
  { name: 'products', url: '/products',  component: ProductsComponent },
  { name: 'cart', url: '/cart',  component: CartComponent },
  { name: 'profile', url: '/profile',  component: ProfileComponent },
  // { name: 'manage.**',
  //   url: '/manage',
  //   loadChildren: './manage/manage.module#ManageModule'
  // }
];
