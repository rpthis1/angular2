import {Component} from 'angular2/core'
import {ImagesComponent} from '../bind/images.component'
import {IconComponent} from '../two_way_binding/icon.component'

@Component({
    selector:'myswitch-component',
    template: `
<ul class="nav nav-pills">
  <li  [ngClass] = "{
      'active': isWork()
  }"
  (click) = "viewMode= 'home'" >
    <a >Homes</a>
  </li>
  
  <li [class.active] = "viewMode === 'work'" (click) = "viewMode= 'work'" >
    <a >Work</a>
  </li>
</ul>

<div [ngSwitch] ="viewMode" >
  <template [ngSwitchWhen] = "'home'">
  <myswitch-component></myswitch-component>
  </template>
  <template [ngSwitchWhen] = "'work'">
     <my-images></my-images>
     <icon-component [toggle]="false" (change)="onIconChange($event)" ></icon-component> 
  </template>
<div>
    `,
    directives:[ImagesComponent,IconComponent]
})


export class MySwitchComponent {
    
    viewMode = 'home';
        onIconChange($event){
        console.log($event);
    }
    
    isWork(){
        if(this.viewMode === 'home'){
            return true;
        }
        return false;
    }
    
    
}