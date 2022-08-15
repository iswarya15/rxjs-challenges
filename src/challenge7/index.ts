import { BehaviorSubject, fromEvent, Observable, map, merge, startWith, withLatestFrom, filter, tap } from 'rxjs';
import '../header';

const minus = <HTMLButtonElement>document.querySelector('#minus');
const plus = <HTMLButtonElement>document.querySelector('#plus');
const label = <HTMLLabelElement>document.querySelector('#label');

const state$: BehaviorSubject<number> = new BehaviorSubject(0);
const minus$: Observable<number> = fromEvent(minus, 'click').pipe(map(() => -1));
const plus$: Observable<number> = fromEvent(plus, 'click').pipe(map(() => 1));

merge(minus$, plus$)
  .pipe(
    startWith(state$.value),
    withLatestFrom(state$),
    map(([change, total]: [number, number]) => {
      console.log(`change : ${change}, total : ${total}`);
      return change + total;
    }),
    filter((val: number) => val >= 0),
    tap((total: number) => state$.next(total))
  )
  .subscribe();

state$.pipe(tap((val: number) => (label.textContent = val.toString()))).subscribe();
