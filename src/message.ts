import {Observable, Subject, Observer, of, from} from 'rxjs'
import {myAwesomeObservable} from './RxJS-tasks/second-task'
import {myFilter} from './RxJS-tasks/third-task'
import {switchCase} from './RxJS-tasks/fourth-task'
import {myAwesomeSubject} from "./RxJS-tasks/fifth.task";
import "./RxJS-tasks/first-task.js"

export default  function greeter(message: string) {
    return 'Hello, ' + message;
}

const s = new myAwesomeSubject(2);

s.subscribe((v:any) => console.log('first '+ v));

s.next(1);
s.next(2);
s.next(3);

s.next(4);
s.next(5);
s.next(6);

s.subscribe((v:any) => console.log('second' + v));

s.next(7);
s.next(8);
s.subscribe((v:any) => console.log('third' + v));
s.next(9);
s.next(10);
s.next(11);
s.next(12);


// myAwesomeObservable().pipe(myFilter('filterString Hii rtzxmL'), switchCase()).subscribe(v => console.log(v));


