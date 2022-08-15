import { BehaviorSubject, fromEvent, map, merge, Observable, tap } from 'rxjs';
import '../header';

const label = <HTMLLabelElement>document.getElementById('label');

const buttons = Array.from(document.querySelectorAll('button'));

const buttonObservables: Observable<string | null>[] = buttons.map((button) =>
  fromEvent(button, 'click').pipe(map(() => button.textContent))
);

let counter = new BehaviorSubject(0);

merge(...buttonObservables)
  .pipe(
    tap((val) => {
      val === '+' ? counter.next(counter.value + 1) : counter.next(counter.value - 1);
    })
  )
  .subscribe();

counter.pipe(tap((val) => (label.textContent = val.toString()))).subscribe();
