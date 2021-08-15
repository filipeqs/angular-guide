import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
    count: number = 0;
    @Output() intervalFired = new EventEmitter<number>();
    interval;

    constructor() {}

    ngOnInit(): void {}

    onGameStart() {
        this.interval = setInterval(() => {
            this.count++;
            this.intervalFired.emit(this.count);
        }, 1000);
    }

    onGameStop() {
        clearInterval(this.interval);
    }
}
