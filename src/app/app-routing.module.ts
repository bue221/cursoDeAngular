import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { Error404Component } from './pages/error404/error404.component';
//components
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    //component: LayoutComponent,
    children: [
      {
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'home',
      },
      {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'contact',
      },
      {
        path: 'detail-product/:id',
        component: DetailProductComponent,
        pathMatch: 'detail-product/:id',
      },
      {
        path: 'products',
        component: ProductsComponent,
        pathMatch: 'products',
      },
    ],
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
