import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

// webpack html imports
//let template = require('./alert-demo.html');

@Component({
  selector: 'alert-demo',
  templateUrl:"app/templates/alert-demo.html",
  directives: [AlertComponent, CORE_DIRECTIVES]
})
export class AlertdComponent {
  public alerts:Array<Object> = [
    {
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.',
      closable: true
    }
  ];

  public closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }

  public addAlert():void {
    this.alerts.push({msg: 'Another alert!', type: 'warning', closable: true});
  }
}