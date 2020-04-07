import { Directive, EventEmitter, HostListener, Inject, Input, OnInit, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Action, TargetTypes } from './types';
import { DOCUMENT } from '@angular/common';

@Directive({
    selector: '[ngfClipboard]'
})
export class ClipboardDirective implements OnInit {
    @Input() ngfClipboard: TargetTypes;
    @Input() action: Action;
    @Output() ngfOut = new EventEmitter();
    hostElement: any;
    result: string;

    constructor(private viewContainerRef: ViewContainerRef,
                @Inject(DOCUMENT) private document: Document,
                private renderer: Renderer2) {
        this.hostElement = this.viewContainerRef.element.nativeElement;


    }

    ngOnInit(): void {

    }

    @HostListener('click', ['$event'])
    hostClick($event) {
        $event.preventDefault();
        if (!!this.ngfClipboard) {
            if (this.ngfClipboard instanceof Element) {
                this.result = this.ngfClipboard.textContent;
            } else if (typeof this.ngfClipboard === 'string') {
                this.result = this.ngfClipboard;
            }
            const elem: HTMLTextAreaElement = this.document.createElement('textarea');
            elem.value = this.result;
            this.renderer.appendChild(this.document.body, elem);
            // this.document.body.appendChild(elem);
            elem.focus();
            elem.setSelectionRange(0, 9999);
            this.document.execCommand('copy');
            this.ngfOut.next({copyText: this.result});
            this.renderer.removeChild(this.document.body, elem);
            /*const cp = new clipboard(this.ngfClipboard);
            cp.on('success', (e) => {
                console.log('Action:', e.action);
                console.log('Text:', e.text);

                console.log('Trigger:', e.trigger);

                e.clearSelection();
            });*/
        }
    }

}
