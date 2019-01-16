//Create your own Subject, which should skip defined amount of emitted values

import {Subject, Subscriber, Subscription} from "rxjs";

export class myAwesomeSubscriberInfo<T>{
    subscriber: Subscriber<T>;
    skip: number;
}

export class myAwesomeSubject<T> extends Subject<T> {
    public bufferNumber:number;
    public myObservers: myAwesomeSubscriberInfo<T>[] = [];
    constructor(bufferNumber:number) {
        super();
        this.bufferNumber = bufferNumber;
    }


    _subscribe(subscriber:Subscriber<T>):Subscription{
        this.myObservers.push({subscriber: subscriber, skip: this.bufferNumber});
        return subscriber;
    }

    next(value:T):void {
        this.myObservers.forEach((observer) => {
            if (observer.skip <= 0) {

                  observer.subscriber.next(value);
                
            } else {observer.skip--}
        });
    }
}

