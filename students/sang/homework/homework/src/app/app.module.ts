import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { Page1Component } from './module1/page1.component';
import { Module1Module } from './module1/module1.module';

const routes: Routes = [
  { path: '', redirectTo: 'module1', pathMatch: "full" },
  { path: "module1", loadChildren: "./module1/module1.module#Module1Module" },
  { path: "module2", loadChildren: "./module3/module2.module#Module2Module" },
  { path: "module3", loadChildren: "./module4/module4.module#Module3Module" }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    Module1Module
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
