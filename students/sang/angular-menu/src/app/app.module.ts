import * as $ from 'jquery';
import { Injectable } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpModule } from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CookieService} from"ngx-cookie-service";


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TacGiaComponent } from './tac-gia/tac-gia.component';
import { MuonTraComponent } from './muon-tra/muon-tra.component';
import { UtilityService } from "./services/utility.service";
import { LoginComponent } from './login/login.component';
import { ApiService } from "./services/api.service";
import { LoginService } from "./login/login.service";
import { RoleListComponent } from './role/role-list.component';
import { RoleService } from "./role/role.service";
import { RoleDetailComponent } from "./role/role-detail.component";
import { UserDetailComponent } from "./user/user-detail.component";
import { UserListComponent } from "./user/user-list.component";
import { UserService } from "./user/user.service";
import { NotificationService } from './services/notification.service';
import { LoadingService } from './services/loading.service';
import { SachService } from './sach/sach.service';
import { SachDetailComponent } from './sach/sach-detail.component';
import { SachListComponent } from './sach/sach-list.component';
import { CateService } from './category/cate.service';
import { CateListComponent } from './category/cate-list.component';
import { CateDetailComponent } from './category/cate-detail.component';
import { CustomerService } from './customer/customer.service';
import { CustomerListComponent } from './customer/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail.component';





const routes: Routes =[
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: "main", component: MenuComponent, children:[
    {path :'', redirectTo:"sach-list",pathMatch:"full"},
    {path : 'sach-list', component: SachListComponent},
    {path : 'sach-detail/:id', component: SachDetailComponent},
    {path : 'muon-tra', component: MuonTraComponent},
    {path : 'role-list',component:RoleListComponent},
    {path : 'role-detail/:id',component:RoleDetailComponent},
    {path : 'user-detail/:id',component:UserDetailComponent},
    {path : 'user-list',component:UserListComponent},
    {path : 'cate-list',component:CateListComponent},
    {path : 'customer-list',component:CustomerListComponent},
    {path : 'customer-detail/:id',component:CustomerDetailComponent},
    {path : 'cate-detail/:id',component:CateDetailComponent}


  ]},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TacGiaComponent,
    SachListComponent,
    SachDetailComponent,
    MuonTraComponent,
    LoginComponent,
    RoleListComponent,
    RoleDetailComponent,
    UserListComponent,
    UserDetailComponent,
    CateListComponent,
    CateDetailComponent,
    CustomerDetailComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [UtilityService,ApiService,LoginService,RoleService,UserService,CookieService,
    NotificationService,LoadingService,SachService,CateService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
