import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AmChartsModule } from "@amcharts/amcharts3-angular";


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
//user
import { UserDetailComponent } from './main/user/user-detail.component';
import { UserListComponent } from './main/user/user-list.component';
import { UserService } from './main/user/service/user.service';
//customer
import { CustomerDetailComponent } from './main/customer/customer-detail.component';
import { CustomerListComponent } from './main/customer/customer-list.component';
import { CustomerService } from './main/customer/service/customer.service';
//dashboard
import { DashboardComponent } from './main/dashboard/dashboard.component';
//role
import { RoleDetailComponent } from './main/role/role-detail.component';
import { RoleListComponent } from './main/role/role-list.component';
import { RoleService } from './main/role/service/role.service';

//login
import { LoginComponent } from './authorize/login.component';
import { LoginService } from './authorize/service/login.service';
//api
import { ApiService } from './api.service';
//manufacturer
import { ManufacturerService } from './main/manufaturer/service/manufacturer.service';
import { ManufacturerListComponent } from './main/manufaturer/manufacturer-list.component';
import { ManufacturerDetailComponent } from './main/manufaturer/manufacturer-detail.component';
//chart
import { LineChartComponent } from './main/shared/line-chart.directive';
import { LineChartLabelComponent } from './main/shared/line-chart-label.directive';
import { MapChartComponent } from './main/shared/map-chart.directive';
import { BarChartComponent } from './main/shared/bar-chart.directive';
//cookie
import { CookieService } from 'ngx-cookie-service';
//unit 
import { UnitDetailComponent } from './main/unit/unit-detail.component';
import { UnitListComponent } from './main/unit/unit-list.component';
import { UnitService } from './main/unit/service/unit.service';
//category
import { CategoryDetailComponent } from './main/category/category-detail.component';
import { CategoryListComponent } from './main/category/category-list.component';
import { CategoryService } from './main/category/service/category.service';
//product
import { ProductDetailComponent } from './main/product/product-detail.component';
import { ProductListComponent } from './main/product/product-list.component';
import { ProductService } from './main/product/service/product.service';
//loading and Notify
import { LoadingService } from './main/service/loading.service';
import { NotificationSerivce } from './main/service/notification.service';
//order 
import { OrderDetailComponent } from './main/order/order-detail.component';
import { OrderListComponent } from './main/order/order-list.component';
import { OrderService } from './main/order/service/order.service';







const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'manufacturer-list', pathMatch: 'full' },
      //dashboard
      { path: 'dashboard', component: DashboardComponent }, {
        path: 'login', component: LoginComponent
      },
      //customer-list
      { path: 'customer-list', component: CustomerListComponent },
      //user
      { path: 'user-detail/:id', component: UserDetailComponent },
      { path: 'user-list', component: UserListComponent },
      //role
      { path: 'role-detail/:id', component: RoleDetailComponent },
      { path: 'role-list', component: RoleListComponent },
      //manufacturer
      { path: 'manufacturer-detail/:id', component: ManufacturerDetailComponent },
      { path: 'manufacturer-list', component: ManufacturerListComponent },
      //customer
      { path: 'customer-detail/:id', component: CustomerDetailComponent },
      { path: 'customer-list', component: CustomerListComponent },
      //unit
      { path: 'unit-detail/:id', component: UnitDetailComponent },
      { path: 'unit-list', component: UnitListComponent },
      //category
      { path: 'category-detail/:id', component: CategoryDetailComponent },
      { path: 'category-list', component: CategoryListComponent },
      //product
      { path: 'product-detail/:id', component: ProductDetailComponent },
      { path: 'product-list', component: ProductListComponent },
      //order
      { path: 'order-detail/:id', component: OrderDetailComponent },
      { path: 'order-list', component: OrderListComponent }
    ]
  }

];




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CustomerListComponent,
    DashboardComponent,
    BarChartComponent,
    RoleDetailComponent,
    RoleListComponent,
    LineChartComponent,
    LineChartLabelComponent,
    LoginComponent,
    ManufacturerListComponent,
    ManufacturerDetailComponent,
    MapChartComponent,
    CustomerDetailComponent,
    UnitListComponent,
    UnitDetailComponent,
    CategoryDetailComponent,
    CategoryListComponent,
    ProductDetailComponent,
    ProductListComponent,
    OrderDetailComponent,
    OrderListComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AmChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RoleService, ApiService, ManufacturerService, UserService, LoginService, CookieService, CustomerService, UnitService, CategoryService
    , ProductService, LoadingService, NotificationSerivce, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
