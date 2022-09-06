import { BehaviorSubject, fromEvent, map, merge, Observable, startWith, tap, withLatestFrom } from 'rxjs';
import '../header';

const label = <HTMLLabelElement>document.getElementById('label');
const minus = <HTMLButtonElement>document.querySelector('#minus');
const plus = <HTMLButtonElement>document.querySelector('#plus');

const state$: BehaviorSubject<number> = new BehaviorSubject(0);
const minus$: Observable<number> = fromEvent(minus, 'click').pipe(map(() => -1));
const plus$: Observable<number> = fromEvent(plus, 'click').pipe(map(() => 1));

merge(minus$, plus$)
  .pipe(
    startWith(state$.value),
    withLatestFrom(state$),
    map(([change, total]) => change + total),
    tap((val: number) => state$.next(val))
  )
  .subscribe();

state$.pipe(tap((val: number) => (label.textContent = val.toString()))).subscribe();
