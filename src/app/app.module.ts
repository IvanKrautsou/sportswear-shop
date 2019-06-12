import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { GoodsComponent } from './pages/products-page/goods/goods.component';
import { ProductsFilterComponent } from './pages/products-page/products-filter/products-filter.component';
import { AddProductComponent } from './pages/products-page/add-product/add-product.component';
import { ProductComponent } from './pages/products-page/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsPageComponent,
    GoodsComponent,
    ProductsFilterComponent,
    AddProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
