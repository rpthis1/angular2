import {Component} from 'angular2/core'

@Component({
    selector:'my-if',
    template:`
    
    <div *ngIf="show">
    div1
    </div>
    <div>
    div2
    </div>
    `
})
export class MyifComponent{
    
    show = false;
    
}