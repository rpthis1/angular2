//our root app component
import {Component, ComponentRef, 
    Input,
     ViewContainerRef, 
     ComponentResolver, 
     ViewChild,
     ComponentFactory} from 'angular2/core'
     
     import {ImagesComponent} from '../bind/images.component'


@Component({
  selector: 'dcl-wrapper',
  template: `
  <div #target></div>
  <button (click)="kill()">destroy</button>
  `
})
export class DclWrapper {
  @ViewChild('target', {read: ViewContainerRef}) target;
  @Input() type;
  cmpRef:ComponentRef;
  private isViewInitialized:boolean = false;
  
  constructor(private resolver: ComponentResolver) {}

  updateComponent() {
    if(!this.isViewInitialized) {
      return;
    }
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
//    this.dcl.loadNextToLocation(this.type, this.target).then((cmpRef) => {
    this.resolver.resolveComponent(this.type).then((factory:ComponentFactory<any>) => {
      this.cmpRef = this.target.createComponent(factory)
    });
  }
  
  ngOnChanges() {
    this.updateComponent();
  }
  
  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();  
  }
  
  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }    
  }
   kill() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }    
  }
}

@Component({
  selector: 'c1',
  template: `<h2>c1</h2>`
  
})
export class C1 {
}

@Component({
  selector: 'c2',
  template: `<h2>c2</h2>`
  
})
export class C2 {
}

@Component({
  selector: 'c3',
  template: `<h2>c3</h2>`
  
})
export class C3 {
}

@Component({
  selector: 'my-tabs',
  directives: [DclWrapper],
  template: `
  <h2>Tabs</h2>
  <div *ngFor="#tab of tabs">
    <dcl-wrapper [type]="tab"></dcl-wrapper>
  </div>
`
})
export class Tabs {
  @Input() tabs;
}


@Component({
  selector: 'tabs-app',
  directives: [Tabs],
  template: `
  <h2>Hello {{name}}</h2>
  <my-tabs [tabs]="types"></my-tabs>
`
})
export class TabsComponent {
  types = [ImagesComponent];
}