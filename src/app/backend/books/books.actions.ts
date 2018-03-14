import { dispatch } from "@angular-redux/store";
import { Injectable } from "@angular/core";
import {
  generateAsyncActionNames,
  IAction,
  IAsyncActionNames,
  RestService
} from "@dcs/ngx-utils";
import { fromJS } from "immutable";

export const fetchActions: IAsyncActionNames = generateAsyncActionNames(
  "BOOKS_FETCH"
);
export const insertActions: IAsyncActionNames = generateAsyncActionNames(
  "BOOKS_INSERT"
);

export const deleteActions: IAsyncActionNames = generateAsyncActionNames(
  "BOOKS_DELETE"
);

const BASE_URL = "books";

@Injectable()
export class BooksActions {
  constructor(private restService: RestService) {}

  @dispatch()
  public fetchBooks(): IAction {
    return {
      type: fetchActions.base,
      payload: this.restService.get(BASE_URL)
    };
  }

  @dispatch()
  public insertBook(pBook: Map<string, any>): IAction {
    return {
      type: insertActions.base,
      payload: this.restService.post(BASE_URL, fromJS(pBook))
    };
  }

  @dispatch()
  public deleteBook(pBook: Map<string, any>): IAction {
    const url = BASE_URL + "/" + pBook.get("id");
    return {
      type: deleteActions.base,
      payload: this.restService.delete(url).map(() => pBook)
    };
  }
}
