import { NgModule } from "@angular/core";
import { APP_REDUCERS, RestService } from "@dcs/ngx-utils";

import { BooksActions } from "./books.actions";
import { booksReducer } from "./books.reducer";

@NgModule({
  providers: [
    BooksActions,
    RestService,
    {
      provide: APP_REDUCERS,
      useValue: { name: "books", reducer: booksReducer },
      multi: true
    }
  ]
})
export class BooksModule {}
