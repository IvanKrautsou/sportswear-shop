import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShoppingCartPageComponent} from './pages/shopping-cart-page/shopping-cart-page.component';
import {ProductsPageComponent} from './pages/products-page/products-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsPageComponent},
  {path: 'cart', component: ShoppingCartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
