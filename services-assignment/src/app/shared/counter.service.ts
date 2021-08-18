import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
    count = 0;

    addToCount() {
        this.count++;
        console.log(this.count);
    }
}
