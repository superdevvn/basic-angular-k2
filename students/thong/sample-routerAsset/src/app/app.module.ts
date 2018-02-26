import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { RoleListComponent } from './role-list/role-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UtilityService } from './service/utility.service';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch:'full'},
  {path:'main', component: MenuComponent,children: [
    {path:'', redirectTo: 'user-list', pathMatch: 'full'},
    
    {path:'user-list', component: UserListComponent},
    {path:'user-detail', component: UserDetailComponent},
    {path:'role-list', component: RoleListComponent},
    {path:'role-detail', component: RoleDetailComponent},

  ]},
  {path:'login', component:LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RoleDetailComponent,
    RoleListComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
