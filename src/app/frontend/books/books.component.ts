import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { PresentationalComponent } from '@dcs/ngx-utils';

import { BooksActions } from '../../backend/books/books.actions';
import { booksSelector, booksLoading } from '../../backend/books/books.selectors';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { fromJS } from 'immutable';
import swal from 'sweetalert2';

@Component({
  selector: 'dcs-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent extends PresentationalComponent implements OnInit {
  @select(booksSelector) public books$: Observable<any[]>;

  @select(booksLoading) public loading$: boolean;

  public form: FormGroup;

  constructor(fb: FormBuilder, private booksActions: BooksActions) {
    super();

    this.form = fb.group({
      // id: [''],
      title: ['', Validators.required],
      isbn: [''],
    });
  }

  ngOnInit(): void {
    this.booksActions.fetchBooks();
  }

  public deleteBook(pBook: Map<string, any>) {
    swal({
      title: 'Are you sure?',
      text: `Book '${pBook.get('title')}' will be deleted`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result: any) => {
      if (result.value) {
        this.booksActions.deleteBook(pBook);
      }
    });
  }

  public onSubmitBook(formData: any) {
    this.booksActions.insertBook(fromJS(formData));
    this.form.reset();
  }
}
