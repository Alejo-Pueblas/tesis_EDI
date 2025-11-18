import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'clients',
    loadComponent: () => import('./components/clients-list/clients-list.component').then(m => m.ClientsListComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./components/products-list/products-list.component').then(m => m.ProductsListComponent)
  },
  {
    path: 'orders',
    loadComponent: () => import('./components/orders-list/orders-list.component').then(m => m.OrdersListComponent)
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
