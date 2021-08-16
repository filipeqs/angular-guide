import {
    Directive,
    ElementRef,
    HostListener,
    OnInit,
    Renderer2,
    HostBinding,
    Input,
} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}
