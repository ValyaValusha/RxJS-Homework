// Make your own creation operator:
// - Should return an Observable, which emits random symbol
// - Symbols should be in camel or lower case (also randomly)
// - Each symbol should be emitted each second after subscription

import {Observable} from 'rxjs'

function myAwesomeObservable () {
    return new Observable((observer) => {
        setInterval(function(){
            observer.next(getRandomSymbol());
        }, 1000);
        // observer.complete();
        return {
            unsubscribe() {
                console.log('unsubscribed');
            }
        };
    });
}

function getRandomSymbol(): string {
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return symbols.charAt(Math.floor(Math.random() * symbols.length));
}

export {myAwesomeObservable}
