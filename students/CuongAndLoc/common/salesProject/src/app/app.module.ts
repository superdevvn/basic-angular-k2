import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './api.service';
import { loginService } from './login/login.service';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { LoadingService } from './loadingService/loading.service';
import { NotificationService } from './loadingService/notification.service';
import { CustomerService } from './home/customer/customer.service';
import { CustomerListComponent } from './home/customer/customer-list.component';
import { CustomerDetailComponent } from './home/customer/customer-detail.component';
import { OrderService } from './home/customer/order.service';
import { ProductListComponent } from './home/product/product-list.component';
import { CategoryService } from './home/category/category.service';
import { ProductComponent } from './home/product/product.component';
import { ProductService } from './home/product/product.service';
import { ManufacturerService } from './home/manufacturer/manufacturer.service';
import { UnitService } from './home/unit/unit.service';
import { HomePageComponent } from './home/home-page/home-page.component';
import { RoleService } from './home/role/role.service';
import { RoleListComponent } from './home/role/role-list.component';
import { RoleComponent } from './home/role/role.component';

import { OrderListComponent } from './home/order/order-list.component';
import { UserListComponent } from './home/user/user-list.component';
import { userDetailComponent } from './home/user/user-detail.component';
import { UserService } from './home/user/user.service';






const router: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: HomeComponent, children: [
      { path: '', redirectTo: "home-page", pathMatch: 'full' },
      { path: 'home-page', component: HomePageComponent },
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'customer-detail/:id', component: CustomerDetailComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'role-list', component: RoleListComponent },
      { path: 'role/:id', component: RoleComponent },
      { path: 'order-list', component: OrderListComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-detail/:id', component: userDetailComponent },
      
    ]
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    ProductListComponent,
    ProductComponent,
    HomePageComponent,
    RoleListComponent,
    RoleComponent,
    OrderListComponent,
    UserListComponent,
    userDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    HttpModule
  ],
  providers: [ApiService, loginService, CustomerService, CookieService, LoadingService,
    NotificationService, OrderService, CategoryService,
    ProductService, ManufacturerService, UnitService, RoleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
