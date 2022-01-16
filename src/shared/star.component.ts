import { Component, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector : 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})

export class starComponent implements OnChanges{


    @Input() rating :number = 0;
    cropWidth : number = 75;

    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges(): void {
        console.log("onchange in star component")
        this.cropWidth = (this.rating * 75)/5;
    }

    onClick ():void {
        this.ratingClicked.emit(`Rating ${this.rating} clicked`);

    }

}