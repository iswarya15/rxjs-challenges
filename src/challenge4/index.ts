import { Observable, tap, Subject, fromEvent, map, merge } from 'rxjs';
import '../header';

const buttons = Array.from(document.querySelectorAll('button'));
console.log('Array from NodeList => ', buttons);

const label = <HTMLLabelElement>document.getElementById('label');
const state$ = new Subject<string>();

const buttonsObservables: Observable<string | null>[] = buttons.map((button) =>
  fromEvent(button, 'click').pipe(map(() => button.textContent))
);

console.log('Mapped each Button to fromEvent => ', buttonsObservables);

// Subscribing to Click Events & Emitting value for state$
merge(...buttonsObservables)
  .pipe(
    tap((val: any) => {
      console.log('Sending next value to state$ =>', val);
      state$.next(val);
    })
  )
  .subscribe();

// Subscribe to Subject - state$
state$
  .pipe(
    tap((val) => {
      label.textContent = val;
    })
  )
  .subscribe();
