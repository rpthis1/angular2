import {Component} from 'angular2/core';
import {ImagesComponent} from './bind/images.component'
import {AlertdComponent} from './bs/alertd.component'
import {TabdComponent} from './bs/tab/tabd.component'
import {ContainerComponent} from './dynamic/container.component'
import {TwoWayBindingComponent} from './two_way_binding/two_way_binding.component'
import {IconComponent} from './two_way_binding/icon.component'



//    <my-images></my-images>
//    <alert-demo></alert-demo>
//    <tabs-demo></tabs-demo>
//     <widget-container></widget-container>
//<two-way-manual></two-way-manual>
@Component({
    selector: 'my-app',
    template: `

 <icon-component></icon-component>
    
    `,
    directives: [ImagesComponent,AlertdComponent,TabdComponent,ContainerComponent,TwoWayBindingComponent,IconComponent]
})
export class AppComponent { }
