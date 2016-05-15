import {Component,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import {  IBISManagerTreeService } from './ibis-manager-tree.service'


@Component({
  selector: 'ibis-mananer-tree',
  template: `
  <div #treeContainer >
  </div>
  `,
  providers: [IBISManagerTreeService]
})

export class IbisManagerTreeComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('treeContainer') treeContainer: ElementRef;
  constructor(private _ims: IBISManagerTreeService) {

  }

  ngAfterViewInit() {
    this._ims.initializeIBISManagerTree(this.treeContainer);
  }

  ngOnInit() { console.log('ngOnInit'); }
  ngOnDestroy() { console.log('ngOnDestroy'); }
}