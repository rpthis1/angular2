import {Component} from '@angular/core';
import {IbisManagerTreeComponent} from './managers/ibis-manager/ibis-manager-tree.component';


@Component({
    selector: 'my-app',
    template: '<ibis-mananer-tree></ibis-mananer-tree>',
    directives: [IbisManagerTreeComponent]
})
export class AppComponent { }
