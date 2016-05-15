import {Component} from 'angular2/core';
import {ObservComponent} from './observ/observ.component';
import {FormComponent} from './observ/form.component';


//'<my-observ></my-observ>',

@Component({
    selector: 'my-app',
    template: '<my-form></my-form>',
    directives:[ObservComponent,FormComponent]
})
export class AppComponent { }
