import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    loadComponent: () => import('./products/products.component').then(c => c.ProductsComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.component').then(c => c.CartComponent),
  },
];