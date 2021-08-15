import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    odds: number[] = [];
    evens: number[] = [];

    onIntervalFired(firedNumber: number) {
        firedNumber % 2 == 0 ? this.evens.push(firedNumber) : this.odds.push(firedNumber);
    }
}
