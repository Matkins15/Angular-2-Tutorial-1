//ElementRef and Renderer are angular services
//ElementRef - gives acces to host Element
//Remderer - used to modify above element

import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    // css selector for host element
    selector: '[autoGrow]',
    // host, takes a object, used to subscribe events using key value pairs
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer){

    }
    onFocus(){
        this.renderer.setElementStyle(this.el, 'width', '200');
    }

    onBlur(){
        this.renderer.setElementStyle(this.el, 'width', '120');

    }
}
