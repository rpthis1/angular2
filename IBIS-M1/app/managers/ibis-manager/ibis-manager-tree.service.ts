import { Injectable, ElementRef } from '@angular/core';


@Injectable()
export class IBISManagerTreeService {
    constructor() { }

    initializeIBISManagerTree(er: ElementRef) {
        let tree: any =  jQuery(er.nativeElement)
        this.setupTree(tree);
        this.addChangedEvent(tree);
    }

    setupTree(tree: any) {
        tree.jstree(
            {
                'core':
                {
                    'data':
                    {
                        'url': function (node: any) {
                            return node.id === '#' ? 'http://localhost:4356/api/treeroot' : 'http://localhost:4356/api/tree';
                        },

                        'data': function (node: any) {
                            return { 'id': node.id };
                        }
                    }
                }
            }
        );

    }

    addChangedEvent(tree: any) {
        tree.on("changed.jstree", function (e: any, data: any) {
            console.log(data.selected);
        });

    }



}