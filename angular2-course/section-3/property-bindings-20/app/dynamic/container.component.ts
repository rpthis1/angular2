import {
  Component,
  ElementRef,
  DynamicComponentLoader,
  Attribute
  
} from 'angular2/core';


import {  CORE_DIRECTIVES} from 'angular2/common'
//import { System } from 'systemjs'

//var System = require('systemjs');


class MyComponentLoader {
  loadComponentConfig(url){
      
    // return fetch(url)
    //   .then(res => res.json())
    //   .then(componentList => 
    //     Promise.all(componentList.map(config => 
    //       this.loadComponent(config))))
  }
  loadComponent(configObject){
    return System.import(configObject.path)
      .then(componentModule => 
        componentModule[configObject.component])
  }
}

@Component({
    selector: 'widget-container',
    bindings: [MyComponentLoader],
    template: `<div #content></div>`,
    directives: [CORE_DIRECTIVES]
})

    

export class ContainerComponent {
    constructor(
      myLoader: MyComponentLoader,
      loader: DynamicComponentLoader,
      elementRef:ElementRef,
      @Attribute('src') configPath) {
        
        // myLoader.loadComponentConfig(configPath)
        //   .then(components => 
        //     Promise.all(components.map(comp => 
        //       loader.loadIntoLocation(comp,elementRef,'content'))));
    }
}