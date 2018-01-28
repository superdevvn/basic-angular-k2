import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { ClickMeComponent } from './click-me/click-me.component';


@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    ClickMeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
