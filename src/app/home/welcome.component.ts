import { Component, OnInit } from "@angular/core";

@Component({

    templateUrl :'./welcome.component.html'
})
export class WelcomeComponent implements OnInit {


    constructor (){}
    homeTitle : string = 'Welcome Page';


    ngOnInit(): void {
    }


    


}