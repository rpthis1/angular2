// import {Component} from 'angular2/core';

// @Component({
//     selector: 'my-app',
//     template: '<h1>My First Angular 2 App</h1>'
// })
// export class AppComponent { }





import {bootstrap}    from 'angular2/platform/browser';
import {Component, ElementRef, AfterViewInit} from 'angular2/core';

declare var jQuery:JQueryStatic;

@Component({
    selector: 'ng-chosen',
    template:`<select>
        <option *ngFor="#item of items" [value]="item" [selected]="item == selectedValue">{{item}} option</option>
        </select>
        <h4> {{selectedValue}}</h4>`})
export class AppComponent implements AfterViewInit {
    static chosenInitialized = false;
    items = ['First', 'Second', 'Third'];
    selectedValue = 'Second';

    constructor(private el:ElementRef) {
    }

    ngAfterViewInit() {
        if(!AppComponent.chosenInitialized) {
            jQuery(this.el.nativeElement)
                .find('select')
                .on('change', (e, args) => {
                    this.selectedValue = args.selected;
            });
            AppComponent.chosenInitialized = true;
        }
    }
}


