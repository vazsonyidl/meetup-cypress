import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { TodoElementModule } from "../components/todo-element/todo-element.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, TodoElementModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
