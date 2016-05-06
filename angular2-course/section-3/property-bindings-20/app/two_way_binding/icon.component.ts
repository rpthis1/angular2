import {Component, Input, Output,EventEmitter} from 'angular2/core'

@Component({
    selector:'icon-component',
    template:`
    <i class="glyphicon " (click)="onStarClick()"
       [class.glyphicon-star]= "toggle" 
       [class.glyphicon-star-empty]= "!toggle">
    </i>
    `
})

export class IconComponent {
    
   @Input() toggle = false;
   @Output() change = new EventEmitter();
    onStarClick(){
        this.toggle = !this.toggle;
        this.change.emit({})
    }
}