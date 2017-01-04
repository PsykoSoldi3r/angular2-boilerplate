import { NgModule, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
    imports : [ BrowserModule ],
    declarations : [ AppComponent ],
    bootstrap : [ AppComponent ] 
})
export class AppModule extends OnInit { 
    public ngOnInit(){
        console.log('App Module Initialized');
    }
}