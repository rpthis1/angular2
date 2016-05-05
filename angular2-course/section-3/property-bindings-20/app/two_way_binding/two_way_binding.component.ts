import {Component} from 'angular2/core'

@Component({
    selector: "two-way-manual",
    template:`
    <input type="text" [(ngModel)]="feedback" />
    <div>
    {{feedback}}
    </div>
    `
})

export class TwoWayBindingComponent {
    
    title = "hi";
    feedback;
    
    onValueChange($event){
        this.feedback = $event.target.value;
    }
    
    
}