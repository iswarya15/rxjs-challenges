import { fromEvent, map, Observable, tap } from 'rxjs';
import '../header';

const button = <HTMLButtonElement>document.getElementById('button');
const label = <HTMLLabelElement>document.getElementById('label');
const input = <HTMLInputElement>document.getElementById('input');

const submitEvent$: Observable<string> = fromEvent(button, 'click').pipe(map(() => input.value));

submitEvent$
  .pipe(
    tap((val) => {
      label.textContent = val;
    })
  )
  .subscribe();
