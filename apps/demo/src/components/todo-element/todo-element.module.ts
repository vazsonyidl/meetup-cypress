import { NgModule } from "@angular/core";
import { TodoElementComponent } from "./todo-element.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [TodoElementComponent],
  imports: [
    MatCardModule
  ],
  exports: [TodoElementComponent]
})
export class TodoElementModule {
}
