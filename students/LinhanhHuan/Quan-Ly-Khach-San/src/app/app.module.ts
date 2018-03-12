import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from './menu/user-list/user-list.component';
import { UserDetailComponent } from './menu/user-detail/user-detail.component';
import { RoleListComponent } from './menu/role-list/role-list.component';
import { RoleDetailComponent } from './menu/role-detail/role-detail.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './api.service';
import { LoginService } from './login/login.service';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { RoleListService } from './menu/role-list/role-list.service';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MenuComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-detail', component: UserDetailComponent },
      { path: 'role-list', component: RoleListComponent },
      { path: 'role-detail', component: RoleDetailComponent },
      {path:'dashboard',component:DashboardComponent}
    ]
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    UserDetailComponent,
    RoleListComponent,
    RoleDetailComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, LoginService, RoleListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
