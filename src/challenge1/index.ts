import { Observable, map, fromEvent, tap } from 'rxjs';
import '../header';

const button = <HTMLElement>document.querySelector('button');
const input = <HTMLInputElement>document.querySelector('input');

const buttonTap = <HTMLElement>document.getElementById('tap');
const inputTap = <HTMLInputElement>document.getElementById('inputTap');

const clicks$: Observable<Event> = fromEvent(button, 'click');
const clickTap$: Observable<Event> = fromEvent(buttonTap, 'click');

clicks$.pipe(map(() => '')).subscribe((val) => (input.value = val));

clickTap$
  .pipe(
    map(() => ''), //transform
    tap((val) => (inputTap.value = val)) //side effects
  )
  .subscribe();
