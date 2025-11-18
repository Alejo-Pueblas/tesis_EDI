import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/catalog',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    loadComponent: () => import('./components/catalog/catalog.component').then(m => m.CatalogComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'admin/clients',
    loadComponent: () => import('./components/clients-list/clients-list.component').then(m => m.ClientsListComponent)
  },
  {
    path: 'admin/products',
    loadComponent: () => import('./components/products-list/products-list.component').then(m => m.ProductsListComponent)
  },
  {
    path: 'admin/orders',
    loadComponent: () => import('./components/orders-list/orders-list.component').then(m => m.OrdersListComponent)
  },
  {
    path: 'admin',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/catalog'
  }
];
