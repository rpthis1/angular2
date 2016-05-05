
import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {ImagesComponent} from '../../bind/images.component'

// webpack html imports
//let template = require('./tabs-demo.html');

@Component({
  selector: 'tabs-demo',
  directives: [TAB_DIRECTIVES, CORE_DIRECTIVES,ImagesComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "app/templates/tabs-demo.html"
})
export class TabdComponent {
  public tabs:Array<any> = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
    {title: 'Dynamic Title 2', content: '<my-images></my-images>', disabled: true},
    {title: 'Dynamic Title 3', content: '<my-images></my-images>', removable: true}
  ];

  public alertMe():void {
    setTimeout(function ():void {
      alert('You\'ve selected the alert tab!');
    });
  };

  public setActiveTab(index:number):void {
    this.tabs[index].active = true;
  };

  public removeTabHandler(/*tab:any*/):void {
    console.log('Remove Tab handler');
  };
}