import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
    private firstObsSubscription: Subscription;

    constructor() {}

    ngOnInit() {
        // this.firstObsSubscription = interval(1000).subscribe((count) => {
        //     console.log(count);
        // });
        const customIntervalObservable = new Observable((observer: Observer<number>) => {
            let count = 0;
            setInterval(() => {
                observer.next(count);
                if (count == 2) {
                    observer.complete();
                }
                if (count > 3) {
                    observer.error(new Error('Count is greather 3!'));
                }
                count++;
            }, 1000);
        });

        this.firstObsSubscription = customIntervalObservable.subscribe(
            (count: number) => {
                console.log(count);
            },
            (error) => {
                console.log(error.message);
            },
            () => {
                console.log('Completed!');
            },
        );
    }

    ngOnDestroy(): void {
        this.firstObsSubscription.unsubscribe();
    }
}
