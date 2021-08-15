import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{ servername: string; serverContent: string }>();
    @Output() blueprintCreated = new EventEmitter<{ servername: string; serverContent: string }>();
    // newServerName = '';
    // newServerContent = '';
    @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

    constructor() {}

    ngOnInit(): void {}

    onAddServer(nameInput: HTMLInputElement) {
        this.serverCreated.emit({
            servername: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value,
        });
    }

    onAddBlueprint(nameInput) {
        this.blueprintCreated.emit({
            servername: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value,
        });
    }
}
