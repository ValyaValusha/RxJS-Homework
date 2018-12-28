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


// singleton pattern
export class SomeData {
    public subject: Subject<any> = new Subject<string>();
}





