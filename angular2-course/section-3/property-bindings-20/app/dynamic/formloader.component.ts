import {Component, 
    DynamicComponentLoader,
     Injector, 
     ElementRef,
     ComponentRef,
     ViewChild,
    ViewContainerRef} from 'angular2/core';
import {FormComponent} from './form.component';
import {ImagesComponent} from '../bind/images.component'

@Component({
  selector: 'm-p',
  template: `
  <button (click)="form1()">
  View Form
  </button>

    <div>
      Welcome..! Here form component will be loaded.
    </div>
    <div "#target">
    Form will be loaded below this.
    </div>
  `,
  directives: [FormComponent]
})




export class FormLoaderComponent {
 // @ViewChild('target', {read: ViewContainerRef}) target;
  public component: any;
  constructor(public dcl:DynamicComponentLoader) {
  }
  form1(){
      
    // if(this.component != undefined){
    //   this.component.then((componentRef:ComponentRef) => {
    //      // componentRef.dispose();
    //       return componentRef;
    //     });
    // }

   // this.component = this.dcl.loadNextToLocation(FormComponent,this.target)

    //this.component = this.dcl.loadAsRoot(ImagesComponent,"#child",this._injector);
  }
}