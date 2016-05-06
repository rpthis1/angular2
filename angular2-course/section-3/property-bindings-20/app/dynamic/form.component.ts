import {Component} from 'angular2/core'

@Component({
  selector: 'my-form',
  providers: [],
  template: `
    <div>
      name:
      <input type="text">
      </div>
      <div>
      password:
      <input type="password">
    </div>
  `,
  directives: []
})
export class FormComponent {
  constructor() {
  }
  
}