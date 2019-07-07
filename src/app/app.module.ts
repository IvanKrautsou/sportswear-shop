import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { GoodsComponent } from './pages/products-page/goods/goods.component';
import { ProductsFilterComponent } from './pages/products-page/products-filter/products-filter.component';
import { AddProductComponent } from './pages/products-page/add-product/add-product.component';
import { ProductComponent } from './pages/products-page/product/product.component';
import { ControlComponent } from './core/components/control/control.component';
import { CheckboxComponent } from './core/components/control/checkbox/checkbox.component';
import { InputTextComponent } from './core/components/control/input-text/input-text.component';
import { RadioButtonComponent } from './core/components/control/radio-button/radio-button.component';
import { SelectComponent } from './core/components/control/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsPageComponent,
    GoodsComponent,
    ProductsFilterComponent,
    AddProductComponent,
    ProductComponent,
    ControlComponent,
    CheckboxComponent,
    InputTextComponent,
    RadioButtonComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
