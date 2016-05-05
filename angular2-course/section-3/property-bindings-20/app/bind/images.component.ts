import {Component} from 'angular2/core'

@Component({
    selector: "my-images",
    template: `
    <div>
    <img [src]="imagesSource"/>
    </div>
    <button class="btn btn-primary" [class.active]="isNew" (click)="onImageChangeClick($event)">Change Image </button>
    `
})

export class ImagesComponent {

    imagesSource = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwp0FSFnmg1S_QQx1gH5daeEfxLySeWs1qIG7uyb-iOtLUmVLU";
    isNew = false;
    onImageChangeClick($event) {
        this.imagesSource = "http://static.guide.supereva.it/guide/zoologia/anatramandarina.jpg";
        this.isNew = true;
        $event.stopPropagation();
        
    }
}