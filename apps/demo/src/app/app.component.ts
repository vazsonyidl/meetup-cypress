import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'meetup-cypress-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public todos: Array<string> = [];
  public readonly todoElementControl: FormControl = new FormControl('', Validators.required);
  public formGroup: FormGroup = new FormGroup({
    todoElement: this.todoElementControl
  })

  public onAddTodo() {
    this.todos.push(this.todoElementControl.value);
    this.todoElementControl.reset();
    console.log(this.todos);
  }
}
