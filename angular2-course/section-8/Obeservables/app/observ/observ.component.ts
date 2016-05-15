import {Component, AfterViewInit} from 'angular2/core'
import {Observable} from 'rxjs/Rx'

@Component({
    selector: 'my-observ',
    template: `
    <input id="search" type="text" class="form-control"/>
    `
})

export class ObservComponent implements AfterViewInit {

    ngAfterViewInit() {
        
         var keyups = Observable.fromEvent($('#search'),'keyup')
         .map(e => (Object(Object(e).target)).value)
         .filter(text => text.length > 3)
         .debounceTime(400)
         .distinctUntilChanged()
         
         keyups.subscribe(data => console.log(data));
        
        // $("#search").keyup(function (e) {
        //     var text = e.target.value;
        //     var debounce = _.debounce(function (text) {
        //         var url = 'https://api.spotify.com/v1/search?type=artist&q=' + text;
        //         $.getJSON(url, function (artist) {
        //             console.log(artist);
        //         })
        //     }, 400)
        //     if (text.length < 3)
        //         return;
        //     debounce(text);
        // })
        
        
    }

}