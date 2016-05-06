import {Component} from 'angular2/core';
import {ImagesComponent} from './bind/images.component'
import {AlertdComponent} from './bs/alertd.component'
import {TabdComponent} from './bs/tab/tabd.component'
import {ContainerComponent} from './dynamic/container.component'
import {TwoWayBindingComponent} from './two_way_binding/two_way_binding.component'
import {IconComponent} from './two_way_binding/icon.component'
import {MyifComponent} from './if/myif.component'
import {MySwitchComponent} from './switch/myswitch.component'
import {FormComponent} from './dynamic/form.component'
import {TabsComponent} from './dynamic/tabs.component'



//    <my-images></my-images>
//    <alert-demo></alert-demo>
//    <tabs-demo></tabs-demo>
//    <widget-container></widget-container>
//    <two-way-manual></two-way-manual>
//    <icon-component [toggle]="false" (change)="onIconChange($event)" ></icon-component> 
//    <my-if></my-if>
//    <widget-container></widget-container>
//    <myswitch-component></myswitch-component>
//    <my-form></my-form>
//    <m-p></m-p>
@Component({
    selector: 'my-app',
    template: `
<tabs-app></tabs-app>
    `,
    directives: [ImagesComponent,
    AlertdComponent,
    TabdComponent,
    ContainerComponent,
    TwoWayBindingComponent,
    IconComponent,
    MyifComponent,
    MySwitchComponent,
    FormComponent,
    TabsComponent]
})
export class AppComponent {
    
    onIconChange($event){
        console.log($event);
    }
 }
