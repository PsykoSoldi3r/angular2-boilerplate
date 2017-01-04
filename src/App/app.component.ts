import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'hulanframework',
    template: '<h1>Hello {{ name }}</h1>',
})
export class AppComponent extends OnInit { 
    name :string = 'Angular!'; 

    public ngOnInit(){
        console.log('App Component Initialized');
    }
}