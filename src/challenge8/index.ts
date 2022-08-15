import { BehaviorSubject, fromEvent, map, merge, startWith, withLatestFrom, tap, Observable } from 'rxjs';
import '../header';

const plus = <HTMLButtonElement>document.getElementById('plus');
const minus = <HTMLButtonElement>document.getElementById('minus');
const input = <HTMLInputElement>document.getElementById('input');

const plus$: Observable<number> = fromEvent(plus, 'click').pipe(map(() => 1));
const minus$: Observable<number> = fromEvent(minus, 'click').pipe(map(() => -1));
const input$: Observable<number> = fromEvent(input, 'input').pipe(
  map((event: Event) => {
    return +(<HTMLInputElement>event.target).value;
  })
);
const state$ = new BehaviorSubject(0);

merge(plus$, minus$)
  .pipe(
    startWith(0),
    withLatestFrom(state$),
    map(([change, total]: [number, number]) => {
      console.log(`change: ${change}, total: ${total}`);
      return change + total;
    }),
    tap((val: number) => state$.next(val))
  )
  .subscribe();

input$.pipe(tap((val: number) => state$.next(val))).subscribe();

state$.pipe(tap((val: number) => (input.value = val.toString()))).subscribe();
