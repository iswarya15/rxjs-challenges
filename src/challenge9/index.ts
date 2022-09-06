import { BehaviorSubject, combineLatest, fromEvent, map, Observable, startWith, tap } from 'rxjs';
import '../header';

const input1 = <HTMLInputElement>document.getElementById('input1')!;
const input2 = <HTMLInputElement>document.getElementById('input2')!;
const label = <HTMLLabelElement>document.getElementById('label');

const input1Event: Observable<number> = fromEvent(input1, 'input').pipe(
  map((event: Event) => {
    return +(<HTMLInputElement>event.target).value;
  }),
  startWith(0)
);

const input2Event: Observable<number> = fromEvent(input2, 'input').pipe(
  map((event: Event) => +(<HTMLInputElement>event.target).value),
  startWith(0)
);

const state$ = new BehaviorSubject(0);

combineLatest(input1Event, input2Event)
  .pipe(
    map(([val1, val2]: [number, number]) => {
      console.log(`Value1 ${val1 + val2}`);
      state$.next(val1 + val2);
    })
  )
  .subscribe();

state$.pipe(tap((val: any) => (label.innerHTML = val))).subscribe();

// CombineLatest : This operator is best used when you have multiple, long-lived observables that rely on each other for some calculation or determination. Example: where events from multiple buttons are being combined to produce a count of each and an overall total, or a calculation of BMI from the RxJS documentation.
