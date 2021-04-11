import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components


import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
   { path: '', component: ProductsComponent},

   { path: '', component: ProductsComponent},

  { path: 'cart', component: CartComponent },
  
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }