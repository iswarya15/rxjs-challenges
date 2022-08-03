import { fromEvent, map, Observable, tap } from 'rxjs';
import '../header';

const input = <HTMLInputElement>document.querySelector('#input')!;
const label1 = <HTMLElement>document.querySelector('#label1')!;
const label2 = <HTMLElement>document.querySelector('#label2')!;

const input$: Observable<Event> = fromEvent(input, 'input');
input$
  .pipe(
    map(() => input.value),
    tap((val) => {
      label1.textContent = val;
      label2.textContent = val.split('').reverse().join('');
    })
  )
  .subscribe();
