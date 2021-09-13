import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-todo-element',
  template: `
    <div data-testid="todo-element">{{element}}</div>
  `
})
export class TodoElementComponent {
  @Input() element: string;
}
