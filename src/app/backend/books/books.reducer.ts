import { IAction, IState } from '@dcs/ngx-utils';

import {
  DEFAULT_INITIAL_STATE as INITIAL_STATE,
  defaultDeleteReducer,
  defaultFetchReducer,
  defaultInsertReducer
} from '../default.reducer';
import { deleteActions, fetchActions, insertActions } from './books.actions';

export function booksReducer(
  state: IState = INITIAL_STATE,
  action: IAction
): IState {
  state = defaultFetchReducer(state, fetchActions, action);
  state = defaultDeleteReducer(state, deleteActions, action);
  state = defaultInsertReducer(state, insertActions, action);
  return state;
}
