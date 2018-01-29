import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Page1Component } from "./page1.component";
import { Page2Component } from "./page2.component";
import { Page3Component } from "./page3.component";
import { AppComponent } from "../app.component";
import { BrowserModule } from "@angular/platform-browser/src/browser";
import { FormsModule } from "@angular/forms";
export {Page1Component};

const routes: Routes = [
    {
        path: '',
        children: [

            { path: '', redirectTo: 'page1', pathMatch: "full" },
            { path: 'page1', component: Page1Component },
            { path: 'page2', component: Page2Component },
            { path: 'page3', component: Page3Component },

        ]
    }
];

@NgModule ({
    declarations: [
        Page1Component,
        Page2Component,
        Page3Component,
    ],
    imports:[
       RouterModule.forChild(routes),
       FormsModule
    ],
  
})
export class Module1Module{

}