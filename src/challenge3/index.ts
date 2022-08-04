import { Observable, fromEvent, map, tap, merge } from 'rxjs';
import '../header';

const button1 = <HTMLButtonElement>document.getElementById('button1')!;
const button2 = <HTMLButtonElement>document.getElementById('button2');
const label = <HTMLElement>document.querySelector('label');

const buttonOneClick$: Observable<any> = fromEvent<Event>(button1, 'click').pipe(
  map((event: Event) => <HTMLButtonElement>event.target)
);

const buttonTwoClick$: Observable<any> = fromEvent<Event>(button2, 'click').pipe(
  map((event: Event) => <HTMLButtonElement>event.target)
);

merge(buttonOneClick$, buttonTwoClick$) //Input Observables
  .pipe(
    // Output Observable
    tap((target: HTMLButtonElement) => {
      label.textContent = target.textContent;
    })
  )
  .subscribe();

//merge() operator => join operator that is used to turn multiple observables into a single observable.
// It creates an output Observable, which concurrently emits all values from every given input Observables.
