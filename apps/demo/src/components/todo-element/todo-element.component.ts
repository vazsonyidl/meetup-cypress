import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-todo-element',
  template: `
    <mat-card data-testid="todo-element">{{element}}</mat-card>
  `,
  styles: [
    `
      mat-card {
        margin: 8px 0;
      }
    `
  ]
})
export class TodoElementComponent {
  @Input() element: string;
}
