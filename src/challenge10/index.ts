import {
  BehaviorSubject,
  exhaustMap,
  fromEvent,
  interval,
  map,
  merge,
  Observable,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import '../header';

const timer = <HTMLLabelElement>document.getElementById('timer');
const startButton = <HTMLButtonElement>document.getElementById('start');
const stopButton = <HTMLButtonElement>document.getElementById('stop');

const startEvent = fromEvent(startButton, 'click');
const stopEvent = fromEvent(stopButton, 'click');

startEvent
  .pipe(
    switchMap(() => interval(100).pipe(takeUntil(stopEvent))),
    map((val: number) => val),
    tap((value) => {
      console.log('Value : ', value);
      timer.innerHTML = String(value / 10) + 's';
    })
  )
  .subscribe();
