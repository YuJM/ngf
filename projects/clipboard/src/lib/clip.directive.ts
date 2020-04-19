import { Directive, EventEmitter, HostListener, Inject, Input, OnInit, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Action, TargetTypes } from './types';
import { DOCUMENT } from '@angular/common';

@Directive({
    selector: '[ngfClip]'
})
export class ClipDirective implements OnInit {
    @Input()ngfClip: TargetTypes;
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
        if (!!this.ngfClip) {
            if (this.ngfClip instanceof Element) {
                this.result = this.ngfClip.textContent;
            } else if (typeof this.ngfClip === 'string') {
                this.result = this.ngfClip;
            }
            const elem: HTMLTextAreaElement = this.document.createElement('textarea');
            elem.value = this.result;
            elem.style.fontSize = '12pt';
            elem.style.border = '0';
            elem.style.padding = '0';
            elem.style.margin = '0';
            elem.style.position = 'absolute';
            elem.style.left = '-9999px'
            elem.setAttribute('readonly', '');
            this.renderer.appendChild(this.document.body, elem);
            // this.document.body.appendChild(elem);
            elem.focus();
            elem.setSelectionRange(0, 9999);
            this.document.execCommand('copy');
            this.renderer.removeChild(this.document.body, elem);
            this.ngfOut.next({copyText: this.result});
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
