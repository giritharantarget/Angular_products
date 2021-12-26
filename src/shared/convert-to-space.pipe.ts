import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";


@Pipe({
    name: 'convertToSpace'
})

export class convertToSpacePipe implements PipeTransform{
    transform(value: string, charcter: string) {
        return value.replace(charcter,' ');
    }


    
}