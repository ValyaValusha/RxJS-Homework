//Create your own Subject, which should skip defined amount of emitted values

import {Subject} from "rxjs";

export class myAwesomeSubject<T> extends Subject<T> {
    public bufferNumber:number;
    public observers: any;
    constructor(bufferNumber:number) {
        super();
        this.bufferNumber = bufferNumber;
        this.observers = [];
    }

    // @ts-ignore
    subscribe(subscriber:any):void{
        subscriber.skip = this.bufferNumber;
        this.observers.push(subscriber);
    }

    next(value:any):void {
        this.observers.forEach((observer: { (arg0: any): void; skip: number; }) => {
            if (observer.skip <= 0) {
                observer(value);
            } else {observer.skip--}
        });
    }

    error(error:any){
        this.observers.forEach((observer: { error: (arg0: any) => void; }) => observer.error(error));
    }

    complete() {
        this.observers.forEach((observer: { complete: () => void; }) => observer.complete());
    }

}

