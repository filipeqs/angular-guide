import {
    Component,
    ContentChild,
    ElementRef,
    Input,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
    @Input('srvElement') element: { type: string; name: string; content: string };
    @ContentChild('contentParagraph', { static: false }) paragraph: ElementRef;

    constructor() {}

    ngOnInit(): void {}
}
