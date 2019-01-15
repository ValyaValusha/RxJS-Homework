//Create your own Subject, which should skip defined amount of emitted values

import {Subject} from "rxjs";
import { Observer } from "rx";

export class myAwesomeSubject<T> extends Subject<T> {
    public bufferNumber:number;
    public observers: any;
    constructor(bufferNumber:number) {
        super();
        this.bufferNumber = bufferNumber;
        this.observers = [];
    }

    // @ts-ignore
    subscribe(subscriber:Subscriber<T>):Subscription{
        subscriber.skip = this.bufferNumber;
        this.observers.push(subscriber);
    }

    next(value:T):void {
        this.observers.forEach((observer: { next(arg0: any): void; (arg0: any): void; skip: number; }) => {
            if (observer.skip <= 0) {
                if (observer.next) {
                  observer.next(value);  
                } else {
                    observer(value);
                }
                
            } else {observer.skip--}
        });
    }
}

