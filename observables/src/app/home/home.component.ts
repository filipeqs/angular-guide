import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

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
                if (count == 5) {
                    observer.complete();
                }
                if (count > 3) {
                    observer.error(new Error('Count is greather 3!'));
                }
                count++;
            }, 1000);
        });

        customIntervalObservable.pipe(
            map((data: number) => {
                return 'Round' + (data + 1);
            }),
        );

        this.firstObsSubscription = customIntervalObservable
            .pipe(
                map((data: number) => {
                    return 'Round: ' + (data + 1);
                }),
            )
            .subscribe(
                (count: string) => {
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
