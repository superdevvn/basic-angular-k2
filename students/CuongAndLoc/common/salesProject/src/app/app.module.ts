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
const router: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: HomeComponent, children: [


    ]
  },
  { path: 'login',component:LoginComponent, pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    HttpModule
  ],
  providers: [ApiService,loginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
