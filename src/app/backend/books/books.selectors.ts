import { IState } from '@dcs/ngx-utils';

export function booksSelector(state: IState): string {
  return state.get('books').get('entities');
}

export function booksLoading(state: IState): string {
  return state.get('books').get('loading');
}
