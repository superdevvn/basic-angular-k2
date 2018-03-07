import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FashionComponent } from './menu/fashion/fashion.component';
import { AddProductComponent } from './menu/add-product/add-product.component';
import { ProductListComponent } from './menu/product/product-list.component';
import { ProductDetailComponent } from './menu/product/product-detail.component';



const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },

  {
    path: 'main', component: MenuComponent, children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'fashion', component: FashionComponent }
    ]
  },

]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FashionComponent,
    AddProductComponent,
   ProductListComponent,
ProductDetailComponent

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent,FashionComponent,MenuComponent,ProductDetailComponent,ProductListComponent]
})
export class AppModule { }
