import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { BooksComponent } from "./books.component";

const routes: Routes = [{ path: "", component: BooksComponent }];

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  providers: []
})
export class BooksModule {
  constructor() {
    //
  }
}
