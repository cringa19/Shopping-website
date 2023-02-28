import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RatingComponent } from './rating/rating.component';
 
 
const routes: Routes = [
  {path: '', component : ProductsComponent},
  {path: 'cart', component : CartComponent},
  {path: 'checkout', component : CheckoutComponent},
  {path: 'rating', component: RatingComponent},
 
 
  {path: '**', redirectTo: ''}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
 

