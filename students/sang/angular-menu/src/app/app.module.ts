import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpModule } from "@angular/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TacGiaComponent } from './tac-gia/tac-gia.component';
import { NhanVienComponent } from './nhan-vien/nhan-vien.component';
import { DocGiaComponent } from './doc-gia/doc-gia.component';
import { SachComponent } from './sach/sach.component';
import { MuonTraComponent } from './muon-tra/muon-tra.component';

const routes: Routes =[
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: "main", component: MenuComponent, children:[
    {path :'', redirectTo:"tac-gia",pathMatch:"full"},
    {path : 'tac-gia', component: TacGiaComponent},
    {path : 'nhan-vien', component: NhanVienComponent},
    {path : 'doc-gia', component: DocGiaComponent},
    {path : 'sach', component: SachComponent},
    {path : 'muon-tra', component: MuonTraComponent},
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TacGiaComponent,
    NhanVienComponent,
    DocGiaComponent,
    SachComponent,
    MuonTraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
