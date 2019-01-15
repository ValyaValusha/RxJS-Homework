import {from, Observable, of, range, Subject} from "rxjs";
import {filter, map, scan} from "rxjs/operators";

//Observer and Iterator design patterns
const observer = {
    next: (x: any) => console.log('Observer got a next value: ' + x),
    error: (err: any) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};

from([1,2,3,4,5]).subscribe(observer);


//Iterator design pattern
class MultipleIterator {
    private cursor: number;
    private array: any;
    private divisor: number;

    constructor(arr: any, divisor = 1 ){
        this.cursor = 0;
        this.array = arr;
        this.divisor = divisor;
    }

    next() {
        while (this.cursor < this.array.length) {
            const value = this.array[this.cursor++];
            if (value % this.divisor === 0){
                return value;
            }
        }
    }

    hasNext() {
        let cur = this,cursor;
        while (cur < this.array.length) {
            // @ts-ignore
            if (this.array[cur++]% this.divisor === 0){
                return true;
            }
        }
        return false;
    }
}


//Сhain of responsibility design pattern
const source$ = range(0, 10);
source$
    .pipe(filter(x => x % 2 === 0), map(x => x + x), scan((acc, x) => acc + x, 0))
    .subscribe(x => console.log(x));

// the decorator pattern 

export class SubjectSubscriber<T> extends Subscriber<T> {
    constructor(protected destination: Subject<T>) {
      super(destination);
    }
  }
    
//    * @class Subject<T>
//    */
  export class Subject<T> extends Observable<T> implements SubscriptionLike {
    
    [rxSubscriberSymbol]() {
      return new SubjectSubscriber(this);
    }
    
    observers: Observer<T>[] = [];
    
    closed = false;
    
    isStopped = false;
    
    hasError = false;
    
    thrownError: any = null;
    
    constructor() {
      super();
    } .......




// The singleton pattern

protected getSubject(): Subject<T> {
    const subject = this._subject;
    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }
    return this._subject;
  }

  connect(): Subscription {
    let connection = this._connection;
    if (!connection) {
      this._isComplete = false;
      connection = this._connection = new Subscription();
      connection.add(this.source
        .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
      if (connection.closed) {
        this._connection = null;
        connection = Subscription.EMPTY;
      } else {
        this._connection = connection;
      }
    }
    return connection;
  }
