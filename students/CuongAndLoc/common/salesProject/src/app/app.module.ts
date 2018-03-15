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
import { CookieService } from 'ngx-cookie-service';
import { UserDetailComponent } from './home/user/user-detail.component';
import { LoadingService } from './loadingService/loading.service';
import { NotificationService } from './loadingService/notification.service';

const router: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: HomeComponent, children: [
      {path: '', redirectTo:"user-list", pathMatch: 'full'},
      {path: 'user-list', component:UserListComponent},
      {path: 'user-detail/:id', component:UserDetailComponent}
    ]
  },
  { path: 'login',component:LoginComponent, pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    HttpModule
  ],
  providers: [ApiService,loginService,UserService,CookieService, LoadingService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
