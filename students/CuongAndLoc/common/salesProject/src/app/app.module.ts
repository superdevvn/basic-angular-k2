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
import { UserListComponent } from './home/user/user-list.component';
import { UserService } from './home/user/user.service';

const router: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: HomeComponent, children: [
      {path: '', redirectTo:"user-list", pathMatch: 'full'},
      {path: 'user-list', component:UserListComponent}

    ]
  },
  { path: 'login',component:LoginComponent, pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    HttpModule
  ],
  providers: [ApiService,loginService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
