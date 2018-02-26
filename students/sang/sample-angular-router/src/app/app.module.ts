import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {MenuComponent} from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: "full" },
  { path: "main", component: MenuComponent, children: [
    {path: '', redirectTo:"user-list", pathMatch:'full'},
    {path: 'user-list', component: UserListComponent},
    {path: 'user-detail', component: UserDetailComponent},
    {path: 'role-list', component: RoleListComponent},
    {path: 'role-detail', component: RoleDetailComponent}
  ]},
  {
    path: 'login', component: LoginComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RoleListComponent,
    RoleDetailComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
