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
<<<<<<< HEAD
import { RoleListComponent } from './role-list/role-list.component';
import { RoleService } from './role-list/role.service';
=======
import { UserListComponent } from './home/user/user-list.component';
import { UserService } from './home/user/user.service';

>>>>>>> e265117d9140030a7373bda87dea59906f79a9cc
const router: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: HomeComponent, children: [
<<<<<<< HEAD
      {path:'role-list',component:RoleListComponent}
=======
      {path: '', redirectTo:"user-list", pathMatch: 'full'},
      {path: 'user-list', component:UserListComponent}
>>>>>>> e265117d9140030a7373bda87dea59906f79a9cc

    ]
  },
  { path: 'login',component:LoginComponent, pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
<<<<<<< HEAD
    RoleListComponent
=======
    UserListComponent
>>>>>>> e265117d9140030a7373bda87dea59906f79a9cc
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    HttpModule
  ],
<<<<<<< HEAD
  providers: [ApiService,loginService,RoleService],
=======
  providers: [ApiService,loginService,UserService],
>>>>>>> e265117d9140030a7373bda87dea59906f79a9cc
  bootstrap: [AppComponent]
})
export class AppModule { }
