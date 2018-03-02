import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Injectable } from "@angular/core"
import { HttpModule } from "@angular/http"
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { DocGiaComponent } from './doc-gia/doc-gia.component';
import { MenuComponent } from './menu/menu.component';
import { MuonTraComponent } from './muon-tra/muon-tra.component';
import { NhanVienComponent } from './nhan-vien/nhan-vien.component';
import { SachComponent } from './sach/sach.component';
import { TacGiaComponent } from './tac-gia/tac-gia.component';
import { UtilityService } from './services/utility.service';

const routes: Routes =[
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MenuComponent, children:[
    {path: '', redirectTo:'sach',pathMatch: 'full'},
    {path: 'menu', component:MenuComponent},
    {path: 'muon-tra',component:MuonTraComponent},
    {path: 'nhan-vien', component:NhanVienComponent},
    {path: 'sach', component:SachComponent},
    {path: 'tac-gia',component:TacGiaComponent},
    {path: 'doc-gia',component:DocGiaComponent}
  ]}
]


@NgModule({
  declarations: [
    AppComponent,
    DocGiaComponent,
    MenuComponent,
    MuonTraComponent,
    NhanVienComponent,
    SachComponent,
    TacGiaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
