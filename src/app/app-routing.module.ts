import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShoppingCartPageComponent} from './pages/shopping-cart-page/shopping-cart-page.component';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {ProductInfoPageComponent} from './pages/product-info-page/product-info-page.component';
import {AdminPageComponent} from './pages/admin-page/admin-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsPageComponent},
  {path: 'cart', component: ShoppingCartPageComponent},
  {path: 'products/:productId', component: ProductInfoPageComponent},
  {path: 'admin', component: AdminPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
