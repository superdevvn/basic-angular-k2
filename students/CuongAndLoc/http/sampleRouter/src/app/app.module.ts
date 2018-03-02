import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FashionComponent } from './menu/fashion/fashion.component';
import { UnitityService } from './service/utinity.service';
import { AuthorizeService } from './service/AuthorizeService';


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

  ],
  imports: [
    BrowserModule, HttpModule
    ,RouterModule.forRoot(routes)
  ],
  providers: [UnitityService,AuthorizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
