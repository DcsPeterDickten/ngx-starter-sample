import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: BooksComponent }];

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  providers: [],
})
export class BooksModule {
  constructor() {
    //
  }
}
