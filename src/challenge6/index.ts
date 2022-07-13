import { fromEvent, map, tap, withLatestFrom } from "rxjs";

const input = <HTMLInputElement>document.querySelector("#input")!;
const button = <HTMLButtonElement>document.querySelector("#button")!;
const label = <HTMLLabelElement>document.querySelector("#label")!;

const input$ = fromEvent<Event>(input, "input").pipe(
  map((e) => (<HTMLInputElement>e.target).value)
);
const click$ = fromEvent<Event>(button, "click");

click$
  .pipe(
    withLatestFrom(input$),
    map(([_, input]) => input),
    tap((value) => {
      label.textContent = value;
    })
  )
  .subscribe();