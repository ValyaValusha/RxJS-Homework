// Create filtering operator which takes a 
// string and filters all letters which are not exist in string:
import {Observable} from 'rxjs'

const myFilter = (str : string) => (source: Observable<any>) =>
    new Observable(observer => {
        return source.subscribe({
            next(inputStr: string) {
                let outputString = '';
                if (str.toLowerCase().includes(inputStr.toLowerCase())) {
                    outputString = outputString.concat(inputStr);
                    observer.next(outputString);
                }
            },
            error(err) { observer.error(err); },
            complete() { observer.complete(); }
        });
    });

export {myFilter}