import {Component} from 'angular2/core'

@Component({
    selector:'icon-component',
    template:`
    <i class="glyphicon glyphicon-star" (click)="onStarClick()"   [class.glyphicon-star-empty]= "toggle"></i>
    `
})

export class IconComponent {
    
    toggle = false;
    onStarClick(){
        this.toggle = !this.toggle;
    }
}