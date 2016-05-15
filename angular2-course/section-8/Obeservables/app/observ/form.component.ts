import {Component} from 'angular2/core'

import {ControlGroup,FormBuilder} from 'angular2/common'


@Component({
    selector:'my-form',
    template: `
    <form [ngFormModel]="form">
    <input typex="text" ngControl="search"/>
    </form>
    `
})

export class FormComponent{
    
   form: ControlGroup;
   
   constructor(fb:FormBuilder){
       this.form = fb.group(
           {
               search:[]
           }
       )
       
       var search = this.form.find('search');
       
       search.valueChanges
       .debounceTime(400)
       .map(str => (str as string).replace(' ','-'))
       .subscribe( value => console.log(value));
       
   }
    
}