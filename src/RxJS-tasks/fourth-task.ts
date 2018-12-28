// Make transformation operator, which switches camel and lower cases
import {Observable} from 'rxjs'

const switchCase = () => (source: Observable<any>) =>
    new Observable(observer => {
        return source.subscribe({
            next(inputStr: string) {
                let outputStr = '';
                if (inputStr) {
                    for (let i = 0; i < inputStr.length; i++) {
                        if(inputStr.charCodeAt(i) >= 65 && inputStr.charCodeAt(i) <= 90) {
                            outputStr = outputStr + inputStr[i].toLowerCase();
                        } else {outputStr = outputStr + inputStr[i].toUpperCase();}
                    }
                    observer.next(
                        outputStr
                    );
                }
            },
            error(err) { observer.error(err); },
            complete() { observer.complete(); }
        });
    });

export {switchCase}