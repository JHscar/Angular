import { Observable, range, of, interval, timer, from, fromEvent } from 'rxjs';
import axios from 'axios';


const intervalObsvr = new Observable(observer => {
    console.log('start....');
    setTimeout(() => {
        observer.next(0);
        observer.complete()
    }, 1000);
})

// intervalObsvr.subscribe(value => {
//     console.log(value);
// }, (error) => {
//     {
//         console.log("is done")
//     }
// }, () => {
//     console.log("complete");
// })

range(0, 4).subscribe(console.log)
of([1, 2, 3]).subscribe(console.log);
interval(1000).subscribe(console.log);
timer(1000, 500).subscribe(console.log);
from([1, 2, 3, 4]).subscribe(console.log, () => {
    console.log('finished');
});

fromEvent(document.getElementById("click-me"), "click").subscribe(data => {
    console.log(data.target.value);
})